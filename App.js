import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import HomeScreen from './src/screens/Home';
import Post from './src/components/post';
import SearchResultsScreen from './src/screens/searchResults';
import { SafeAreaView } from 'react-native-safe-area-context';
import feed from './assets/data/feed';

const post1 = feed[0];
const post2 = feed[1];
const post3 = feed[2];

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <HomeScreen /> */}
        {/* <Post post={post1} />
        <Post post={post2} />
        <Post post={post3} /> */}
        <SearchResultsScreen />
      </ScrollView>
    </SafeAreaView>
  );
}
