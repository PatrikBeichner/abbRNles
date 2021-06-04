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
            <Text style={styles.description} numberOfLines={2}>Löksås ipsum hans rännil sitt varit samtidigt groda ingalunda hwila, brunsås vidsträckt det ta göras jäst när räv bra mot, smultron strand helt genom kom annat helt annat.</Text>
            {/* old price & new price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$36 </Text>
                <Text style={styles.price}> $30 </Text>
                / night
            </Text>
            {/* total price */}
            <Text style={styles.totalPrice}>$230 total</Text>
        </View>
    );
};

export default Post;