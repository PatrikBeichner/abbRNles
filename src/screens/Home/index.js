import React from 'react';
import { View, ImageBackground, Text, Pressable } from 'react-native';
import styles from './styles';

const HomeScreen = (props) => {
  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn((data = 'Search btn clicked'))}
        //   onPress={() => console.warn( data: 'Explore Btn clicked')}
      >
        <Text style={styles.buttonText}>Explore nearby stays</Text>
      </Pressable>
      <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>
        <Text style={styles.title}>Go Near</Text>
        <Pressable style={styles.button} onPress={() => console.warn('Explore Btn clicked')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
