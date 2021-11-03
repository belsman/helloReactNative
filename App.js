import React, { useState, useEffect, useRef } from 'react';
import { Dimensions, Animated, StyleSheet, TouchableOpacity, Image, FlatList, View } from 'react-native';

const imagesDataList = [];
for (let index=0; index < 10; index++) {
  imagesDataList.push({
    uri: `https://picsum.photos/1000/1000?random=${index}`,
    key: `index-${index}`
  });
}

export default function App() {

  const [ selectedImageURI, setSelectedImageURI ] = useState('');

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

  const ImageModal = ({ height, width, onPress, uri }) => {

    console.log("This is the image modal");
    const slideAnim = useRef(new Animated.Value(Dimensions.get('window').height)).current;

    useEffect(() => {
      Animated.timing(
        slideAnim,
        {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }
      ).start();
    }, [slideAnim]);

    return (
      <TouchableOpacity
        onPress={() => onPress(uri)}
        style={{ height, width, zIndex: 1 }}
      >
        <Animated.Image
          style={
            [styles.image,
            {
              transform: [{ translateY: slideAnim }]
            }
            ]}
          source={{ uri }} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={imagesDataList}
        renderItem={({ item, index, separators }) => (
          <ClickableImage width={'100%'} height={200} onPress={onImagePress} uri={item.uri} />
        )}
      />
      { 
        Boolean(selectedImageURI) &&
        <ImageModal
          width={'100%'}
          height={'100%'}
          onPress={() => setSelectedImageURI('')}
          uri={selectedImageURI} 
        />
      }
    </View>
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
