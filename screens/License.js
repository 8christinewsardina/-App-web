import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default function License({ navigation }) {
  const acceptLicense = () => {
    // Store acceptance in AsyncStorage or state
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>用户许可协议</Text>
      <Text style={styles.text}>
        欢迎使用乡村硅谷打卡App。本应用为公司智能体App，提供个性化任务和共同打卡功能。
        使用本应用即表示您同意以下条款：
        1. 本应用仅供公司员工使用。
        2. 所有数据将用于任务分配和打卡记录。
        3. 请遵守公司政策。
        ...
      </Text>
      <Button title="同意" onPress={acceptLicense} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});
