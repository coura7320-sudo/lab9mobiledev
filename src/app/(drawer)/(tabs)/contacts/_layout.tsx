import { Stack } from 'expo-router';
import { DrawerToggleButton } from 'expo-router/drawer';

export default function ContactsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Contacts',
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
    </Stack>
  );
}
