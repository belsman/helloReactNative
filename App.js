import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

const imagesDataList = [];
for (let index=0; index < 10; index++) {
  imagesDataList.push({
    uri: `https://picsum.photos/1000/1000?random=${index}`,
    key: `index-${index}`
  });
}

export default function App() {

  const [selectedImageURI, setSelectedImageURI ]= useState('');

  const onImagePress = uri => setSelectedImageURI(uri);

  const ClickableImage = ({ height, width, onPress, uri }) => (
    <TouchableOpacity
      onPress={() => onPress(uri)}
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

  if (Boolean(selectedImageURI)) {
    return (<ClickableImage
      width={'100%'}
      height={'100%'}
      onPress={() => setSelectedImageURI('')}
      uri={selectedImageURI} 
    />);
  }

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
