import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import HomeScreen from './src/screens/Home';
import Post from './src/components/post';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView>
      {/* <HomeScreen /> */}
      <Post />
    </SafeAreaView>
  );
}
