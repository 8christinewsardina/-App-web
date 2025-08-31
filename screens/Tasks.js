import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Tasks() {
  const [tasks, setTasks] = useState([
    { id: '1', title: '个性化任务：完成报告', type: 'personal' },
    { id: '2', title: '共同任务：团队会议', type: 'shared' },
  ]);

  // Simulate fetching tasks based on user identity
  useEffect(() => {
    // Here, integrate with AI to generate personalized tasks
    // For now, we'll keep the static tasks
    setTasks([
      { id: '1', title: '个性化任务：完成报告', type: 'personal' },
      { id: '2', title: '共同任务：团队会议', type: 'shared' },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>任务列表</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text>{item.title}</Text>
            <Text>{item.type === 'personal' ? '个性化' : '共同'}</Text>
          </View>
        )}
      />
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
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
