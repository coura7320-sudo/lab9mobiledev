import { Image } from 'expo-image';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { CONTACTS } from '@/data/contacts';

export default function ContactDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const contact = CONTACTS.find((item) => item.id === id);

  return (
    <View style={styles.screen}>
      <Stack.Screen options={{ title: contact?.name ?? 'Contact' }} />
      {contact ? (
        <>
          <Image
            source={`https://i.pravatar.cc/200?u=${contact.id}`}
            style={styles.avatar}
          />
          <Text style={styles.name}>{contact.name}</Text>
          <Text style={styles.program}>{contact.program}</Text>
          <Pressable
            style={styles.button}
            onPress={() => router.navigate('/contacts/chat')}
            accessibilityRole="button"
          >
            <Text style={styles.buttonLabel}>Send a message</Text>
          </Pressable>
        </>
      ) : (
        <Text style={styles.missing}>Contact not found.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 32,
    paddingHorizontal: 16,
    gap: 8,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  program: {
    fontSize: 15,
    color: '#666',
  },
  button: {
    backgroundColor: '#1a5276',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    marginTop: 16,
  },
  buttonLabel: {
    color: '#fff',
    fontWeight: '600',
  },
  missing: {
    color: '#888',
    paddingTop: 32,
  },
});
