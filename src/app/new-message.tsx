import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function NewMessage() {
  const router = useRouter();
  const [recipient, setRecipient] = useState('');

  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.input}
        placeholder="To…"
        value={recipient}
        onChangeText={setRecipient}
        autoFocus
        accessibilityLabel="Message recipient"
      />
      <Pressable
        style={styles.button}
        onPress={() => router.back()}
        accessibilityRole="button"
      >
        <Text style={styles.buttonLabel}>Close</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    gap: 12,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 14,
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#1a5276',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonLabel: {
    color: '#fff',
    fontWeight: '600',
  },
});
