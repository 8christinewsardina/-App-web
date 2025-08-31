import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { ossClient } from '../App';

export default function CheckIn() {
  const [checkedIn, setCheckedIn] = useState(false);
  const [photoUri, setPhotoUri] = useState(null);

  const selectPhoto = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) return;
      if (response.errorMessage) {
        console.error('ImagePicker Error: ', response.errorMessage);
        return;
      }
      setPhotoUri(response.assets[0].uri);
    });
  };

  const uploadPhoto = async () => {
    if (!photoUri) return;
    try {
      const fileName = `checkin-${Date.now()}.jpg`;
      await ossClient.put(fileName, photoUri);
      alert('照片上传成功！');
    } catch (error) {
      console.error('Upload Error: ', error);
      alert('上传失败，请重试。');
    }
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
