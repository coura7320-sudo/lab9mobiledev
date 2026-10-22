import { Tabs } from 'expo-router';
import { DrawerToggleButton } from 'expo-router/drawer';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerLeft: () => <DrawerToggleButton /> }}>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen
        name="contacts"
        options={{ title: 'Contacts', headerShown: false }}
      />
    </Tabs>
  );
}
