import React from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';

const Background = ({ children }: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../public/images/backgroundImage.jpg')}

        style={styles.imageBackground}
      >
        <View style={styles.overlay}>
          {children}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode:"cover",
    height:"100%"
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)', 
    position: 'relative',
  },
});

export default Background;
