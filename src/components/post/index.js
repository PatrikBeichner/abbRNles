import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles.js';

const Post = (props) => {
    return (
        <View style={styles.container}>
            {/* Image */}
            <Image 
                style={styles.image} 
                source={{uri: 'https://picsum.photos/400/600'}} 
            />
            {/* Bed & Bedroom */}
            <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

            {/* type & description */}
            <Text style={styles.description}>Huh Huh Huh its a place to lay down in the dirt</Text>
            {/* old price & new price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$36</Text>
                <Text style={styles.newPrice}>$30</Text>
                / text
            </Text>
            {/* total price */}
            <Text style={styles.totalPrice}>$230 total</Text>
        </View>
    );
};

export default Post;