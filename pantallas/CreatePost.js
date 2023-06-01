import React from 'react';
import { View, Image, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

class CardComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.authorContainer}>
            <View style={styles.authorLargeContainer}>
              <Image
                source={require("../assets/profile_img.png")}
                style={styles.profileImage}
              />
            </View>
            <View style={styles.authorNameContainer}>
              <Text style={styles.authorNameText}>{this.props.post.author}</Text>
            </View>
          </View>
          <View>
            <Image
              source={require("../assets/post.jpeg")}
              style={styles.postImage}
            />
          </View>
          <View style={styles.captionContainer}>
            <Text style={styles.captionText}>{this.props.post.caption}</Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.likeButton}>
              <Ionicons name="heart" size={RFValue(38)} color="white" />
            </View>
            <Text style={styles.likeText}>12 likes</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default CardComponent;