import { View, Text, StyleSheet } from 'react-native';

export default function Profile() {
  // Assume user identity is stored
  const user = { name: '员工A', role: '开发者' };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>个人资料</Text>
      <Text>姓名: {user.name}</Text>
      <Text>角色: {user.role}</Text>
    </View>
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
});
