import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import OSS from 'aliyun-oss-react-native';

import License from './screens/License';
import Home from './screens/Home';
import Tasks from './screens/Tasks';
import CheckIn from './screens/CheckIn';
import Profile from './screens/Profile';

// 配置阿里云OSS
const ossClient = new OSS({
  region: 'your-region', // 替换为您的地域，如'oss-cn-hangzhou'
  accessKeyId: 'your-access-key-id',
  accessKeySecret: 'your-access-key-secret',
  bucket: 'your-bucket-name',
});

export { ossClient };

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="License">
        <Stack.Screen name="License" component={License} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tasks" component={Tasks} />
        <Stack.Screen name="CheckIn" component={CheckIn} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
