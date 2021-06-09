import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import HomeScreen from './src/screens/Home';
import Post from './src/components/post';
import { SafeAreaView } from 'react-native-safe-area-context';
import feed from './assets/data/feed';

const post1=feed[0];

export default function App() {
  return (
    <SafeAreaView>
      {/* <HomeScreen /> */}
      <Post post={post1}/>
    </SafeAreaView>
  );
}
