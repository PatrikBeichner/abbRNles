import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import HomeScreen from './src/screens/Home';

export default function App() {
  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
}
