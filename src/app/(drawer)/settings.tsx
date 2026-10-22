import { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function Settings() {
  const [notifications, setNotifications] = useState(true);

  return (
    <View style={styles.screen}>
      <View style={styles.row}>
        <Text style={styles.label}>Notifications</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  label: {
    fontSize: 16,
  },
});
