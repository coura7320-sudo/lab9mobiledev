import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>DAUST Messenger</Text>
      <Text style={styles.subtitle}>Stay connected with your classmates.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    color: '#1a5276',
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#666',
    fontSize: 15,
    marginTop: 8,
    textAlign: 'center',
  },
});
