import { Image } from 'expo-image';
import { Stack } from 'expo-router';
import { useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Bubble } from '@/components/Bubble';

type Message = {
  id: string;
  text: string;
  mine: boolean;
};

const START_MESSAGES: Message[] = [
  { id: '1', text: 'Hi!', mine: false },
  { id: '2', text: 'Hello Awa!', mine: true },
  { id: '3', text: 'Ready for the lab?', mine: false },
];

export default function Chat() {
  const [messages, setMessages] = useState(START_MESSAGES);
  const [draft, setDraft] = useState('');

  function send() {
    const text = draft.trim();
    if (text === '') return;

    setMessages((current) => [
      ...current,
      { id: String(Date.now()), text, mine: true },
    ]);
    setDraft('');
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.header}>
        <Image source="https://i.pravatar.cc/100" style={styles.avatar} />
        <Text style={styles.name}>Awa Diop</Text>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => (
          <Bubble text={item.text} mine={item.mine} />
        )}
        ListHeaderComponent={<Text style={styles.dateLabel}>Today</Text>}
        ListEmptyComponent={
          <Text style={styles.empty}>No messages yet. Say hello.</Text>
        }
        style={styles.messages}
        contentContainerStyle={styles.messageContent}
        keyboardShouldPersistTaps="handled"
      />
      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          placeholder="Write a message…"
          value={draft}
          onChangeText={setDraft}
          onSubmitEditing={send}
          returnKeyType="send"
          accessibilityLabel="Write a message"
        />
        <Pressable
          style={styles.send}
          onPress={send}
          accessibilityRole="button"
          accessibilityLabel="Send message"
        >
          <Text style={styles.sendLabel}>➤</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  messages: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  messageContent: {
    paddingVertical: 8,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    gap: 8,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 14,
    height: 40,
  },
  send: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1a5276',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendLabel: {
    color: '#fff',
    fontSize: 16,
  },
  empty: {
    textAlign: 'center',
    color: '#888',
    paddingVertical: 32,
  },
  dateLabel: {
    textAlign: 'center',
    color: '#888',
    fontSize: 12,
    paddingBottom: 8,
  },
});
