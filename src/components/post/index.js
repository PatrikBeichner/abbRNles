import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles.js';

const Post = (props) => {
    return (
        <View>
            {/* Image */}
            <Image style={styles.image} source={{uri: 'https://picsum.photos/200/300'}} />
            {/* Bed & Bedroom */}
            {/* type & description */}
            {/* old price & new price */}
            {/* total price */}
        </View>
    );
};

export default Post;