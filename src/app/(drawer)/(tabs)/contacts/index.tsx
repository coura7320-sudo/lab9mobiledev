import { Link } from 'expo-router';
import { useMemo, useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { ContactRow } from '@/components/ContactRow';
import { CONTACTS } from '@/data/contacts';

export default function Contacts() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () =>
      CONTACTS.filter((contact) =>
        contact.name.toLowerCase().includes(query.trim().toLowerCase())
      ),
    [query]
  );

  return (
    <FlatList
      data={filtered}
      keyExtractor={(contact) => contact.id}
      renderItem={({ item }) => (
        <Link
          href={{ pathname: '/contacts/[id]', params: { id: item.id } }}
          asChild
        >
          <Pressable>
            <ContactRow contact={item} />
          </Pressable>
        </Link>
      )}
      ListHeaderComponent={
        <View>
          <View style={styles.headerRow}>
            <Text style={styles.h1}>Contacts</Text>
            <View style={styles.headerActions}>
              <Text style={styles.count}>({filtered.length})</Text>
              <Link href="/new-message" asChild>
                <Pressable accessibilityRole="button">
                  <Text style={styles.action}>New</Text>
                </Pressable>
              </Link>
            </View>
          </View>
          <TextInput
            style={styles.search}
            placeholder="Search…"
            value={query}
            onChangeText={setQuery}
            accessibilityLabel="Search contacts"
          />
        </View>
      }
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={
        <Text style={styles.empty}>No contact matches "{query}".</Text>
      }
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="on-drag"
      contentContainerStyle={styles.content}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 8,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  h1: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a5276',
  },
  count: {
    color: '#888',
  },
  action: {
    color: '#1a5276',
    fontWeight: '600',
  },
  search: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 14,
    marginBottom: 12,
  },
  separator: {
    height: 1,
    backgroundColor: '#e5e5e5',
  },
  empty: {
    textAlign: 'center',
    color: '#888',
    paddingVertical: 32,
  },
});
