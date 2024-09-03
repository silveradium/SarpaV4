import { StyleSheet, Text, View, Image, Button, ActivityIndicator } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

export default function ImageDisplay({navigation, route}) {

  const { image } = route.params;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show the spinner
    setLoading(true);

    // Hide the spinner after 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      navigation.navigate('Results');
    }, 5000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.top}><Image source={{ uri: image }} style={styles.image} /></View>
      <Spinner
        visible={loading}
        textContent={'Identifying...'}
        textStyle={styles.spinnerTextStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    zIndex: -1,

  },
  image: {
    width: '100%',
    height: '100%',
      resizeMode: 'contain',
    backgroundColor: 'black',
    width: '100%',
    shadowColor: 'black',
}, 
top: {
    flex: 2,
    backgroundColor: 'red',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
},
bottom: {
    flex: 1,
    backgroundColor: 'black',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
},
spinnerTextStyle: {
  color: '#FFF',
  fontFamily: 'Poppins-Semibold',
  fontSize: 20,
}
});