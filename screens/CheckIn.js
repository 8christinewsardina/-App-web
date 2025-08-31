import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function CheckIn() {
  const [checkedIn, setCheckedIn] = useState(false);
  const [photoUri, setPhotoUri] = useState(null);

  const selectPhoto = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('需要相册权限！');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhotoUri(result.assets[0].uri);
    }
  };

  const uploadPhoto = async () => {
    if (!photoUri) return;
    // 模拟上传（暂时使用本地存储）
    console.log('照片URI:', photoUri);
    alert('照片已选择（模拟上传成功）');
  };

  const handleCheckIn = async () => {
    if (photoUri) {
      await uploadPhoto();
    }
    setCheckedIn(true);
    // Record check-in to cloud
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>打卡</Text>
      <Button title="选择照片" onPress={selectPhoto} />
      {photoUri && <Image source={{ uri: photoUri }} style={styles.image} />}
      {checkedIn ? (
        <Text>已打卡成功！</Text>
      ) : (
        <Button title="打卡" onPress={handleCheckIn} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});
