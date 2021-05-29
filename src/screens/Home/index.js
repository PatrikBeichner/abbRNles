import React from 'react';
import { 
    View, 
    ImageBackground, 
    Text, 
    Pressable } from 'react-native';
import styles from './styles';

const HomeScreen = props => {
    return (
        <View>
            {/* Search bar */}
            <ImageBackground 
              source={require('../../../assets/images/wallpaper.jpg')} 
              style={styles.image}
            >
                <Text style={styles.title}>Go Near</Text>
                <Pressable 
                  style={styles.button}
                  onPress={()=>console.warn(data='Explore btn clicked')}
                //   onPress={() => console.warn( data: 'Explore Btn clicked')}
                >
                    <Text style={styles.buttonText}>Explore nearby stays</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}


export default HomeScreen
