import { StyleSheet, Text, View, Button, ImageBackground, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Results({ navigation, route}) {

  const { result } = route.params;
  const predictions = result.predictions[0];
  console.log(result);
  console.log("predictions", predictions);

  // Get the indexes of the sorted array in descending order and limit to top 4
const top4Indexes = predictions
.map((value, index) => ({ value, index }))
.sort((a, b) => b.value - a.value)
.slice(0, 4)
.map(item => item.index);

console.log('Top 4 Indexes:', top4Indexes); // Output: [6, 3, 2, 1]


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.pop(2)} style={styles.back}><Image source={require('../../assets/icons/previous.png')} style={ styles.back } /></TouchableOpacity>
      <Image source={require('../../assets/snakeImages/Russell_s Viper1.jpg')} style={ styles.background } />
      <View style={styles.top}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Most Likely</Text>
        </View>
        <View style={styles.snakeName}>
          <Text style={styles.title}>Russell's Viper</Text>
          <Text style={styles.subtitle}>Daboia russelii</Text>
        </View>
        <View style={styles.probability}>
          <Text style={styles.probabilityText}>Probability: 98%</Text>
        </View>
        <View style={styles.characteristics}>
          <View style={styles.characteristic}>
              <Image source={require('../../assets/icons/danger.png')} style={styles.characteristicIcon} />
              <View style={styles.characteristicText}>
                <Text style={styles.characteristicTitle}>Highly</Text>
                <Text style={styles.characteristicValue}>Venomous</Text>
              </View>
          </View>
          <TouchableOpacity style={styles.readmore} onPress={() => navigation.navigate('Details')}>
            <Text style={styles.readmoreText}>Read More </Text>
          </TouchableOpacity>
        </View>

        <Text>Results</Text>
      </View>
      <View style={styles.bottom}>

          <Text style={[styles.headingText, {textAlign: 'left', marginLeft: 30, fontFamily: 'Poppins-Light'}]}>Other Possibilites</Text>
          <View style={[styles.characteristics, {justifyContent: 'space-around', padding: 20}]}>
            <Image source={require('../../assets/snakeImages/Snake1.png')} style={styles.otherimages} />
            <Image source={require('../../assets/snakeImages/banded kukri snake.jpg')} style={styles.otherimages} />
            <Image source={require('../../assets/snakeImages/olive keelback.jpg')} style={styles.otherimages} />
          </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  back: {
    position: 'absolute',
    top: "6%",
    left: "8%",
    zIndex: 1,
    width: 30,
    height: 30,

  },
  top: {
    height: '70%',
    backgroundColor: 'transparent',
  },  
  bottom: {
    height: '6%',
    backgroundColor: 'black',
  },
  background: {
    position: 'absolute',
    top: 0,
    resizeMode: 'cover',
    width: '100%',
    height: '68%',
    zIndex: -1,
    },
    heading: {
        marginTop: "10%",
        width: '100%',
        marginBottom: "6%",
    },
    headingText: {
        color: 'white',
        fontFamily: 'Poppins-Semibold',
        fontSize: 22,
        textAlign: 'center',
    },
    snakeName: {
        width: '100%',
        marginLeft: 20,
    },
    title: {
        color: 'white',
        fontFamily: 'Poppins-Semibold',
        fontSize: 31,
    },
    subtitle: {
        color: 'white',
        fontFamily: 'Poppins-Light',
        fontSize: 13,
        marginLeft: 10,
        marginTop: -5,
    },
    probability: {
        width: '100%',
        marginLeft: 20,
        marginTop: "60%",
    },
    probabilityText: {
        color: 'white',
        fontFamily: 'Poppins-Semibold',
        fontSize: 15,
        marginLeft: 10,
    },
    characteristics: {
        width: '100%',
        // marginLeft: 20,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    // charactersistics: {
    //   flexDirection: "row",
    //   justifyContent: "flex-wrap",
    //   flexDirection: 'row',
    //   alignItems: 'flex-start',
    //   //justifyContent: 'space-between',
    //   gap: 5,
    //   flexWrap: 'wrap',
    //   width: '100%',
    //   marginTop: 30,
    // },
    characteristic: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 160,
      height: 70,
      margin: 1,
      marginLeft: 20,
      padding: 20,
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      borderRadius: 10,
    },
    characteristicIcon: {
      width: 30,
      height: 30,
    },
    characteristicText: {
      marginLeft: 20,
    },
    characteristicTitle: {
      color: "red",
      fontFamily: "Poppins-Medium",
      fontSize: 14,
    },
    characteristicValue: {
      color: "red",
      fontFamily: "Poppins-Light",
      fontSize: 12,
      width: 100,
    },
    readmore: {
      justifyContent: 'center',
      alignItems: 'center',

    },
    readmoreText: {
      color: 'white',
      fontFamily: 'Poppins-Semibold',
      fontSize: 15,
      borderRadius: 10,
      width: 100,
      height: 30,
      textAlign: 'center',
      marginTop: 20,
      marginRight: 10,
    },
    otherimages: {
      width: 140,
      height: 110,
      borderRadius: 20,
      margin: 1,
    },
});