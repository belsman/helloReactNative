import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

export default function App() {

  const imagesDataList = [];
  for (let index=0; index < 10; index++) {
    imagesDataList.push({ 'uri': `https://picsum.photos/200/300?random=${index}`, key: `index-${index}` })
  }

  const onImagePress = () => alert("You pressed an Image");

  const ClickableImage = ({ height, width, onPress, uri }) => (
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
    <FlatList
      data={imagesDataList}
      renderItem={({ item, index, separators }) => (
        <ClickableImage width={'100%'} height={200} onPress={onImagePress} uri={item.uri} />
      )}
    />
  )
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
