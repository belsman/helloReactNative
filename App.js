import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';

export default function App() {
  const uri = 'https://picsum.photos/1000/1000';

  const onImagePress = () => alert("You pressed an Image");

  const ClickableImage = ({ height, width, onPress }) => (
    <TouchableOpacity
      onPress={onPress}
      style={{ height, width }}
    >
      <Image 
        source={{
          uri,
        }}
        style={styles.image}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ClickableImage width={'100%'} height={200} onPress={onImagePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%'
  }
});
