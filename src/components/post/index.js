import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles.js';

const Post = (props) => {

    // console.log(props);
    const post = props.post;

    return (
        <View style={styles.container}>
            {/* Image */}
            <Image 
                style={styles.image} 
                source={{uri: post.image}} 
            />
            {/* Bed & Bedroom */}
            <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>

            {/* type & description */}
            <Text style={styles.description} numberOfLines={2}>{post.type}. {post.title}</Text>
            {/* old price & new price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice} </Text>
                <Text style={styles.price}> ${post.newPrice} </Text>
                / night
            </Text>
            {/* total price */}
            <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
        </View>
    );
};

export default Post;