import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import KeypadRow from "./KeypadRow";

const Keypad = (props) => {
  const keypress = (event) => {
    console.log(event.identifier);
  };
  return (
    <View style={styles.keypadContainer}>
      {/*<View style={styles.keypadRow}>*/}
      <KeypadRow numbers={[1, 2, 3]} />
      <KeypadRow numbers={[4, 5, 6]} />
      <KeypadRow numbers={[7, 8, 9]} />
      <KeypadRow numbers={[null, 0, "Delete"]} />
        {/*<TouchableHighlight style={styles.keypadButton} onPress={keypress} value={1}>*/}
        {/*  <View>*/}
        {/*    <Text style={styles.keypadNumber} value={1}>1</Text>*/}
        {/*  </View>*/}
        {/*</TouchableHighlight>*/}
        {/*<View style={styles.keypadButton}>*/}
        {/*  <Text style={styles.keypadNumber}>2</Text>*/}
        {/*</View>*/}
        {/*<View style={styles.keypadButton}>*/}
        {/*  <Text style={styles.keypadNumber}>3</Text>*/}
        {/*</View>*/}
      {/*</View>*/}
      {/*<View style={styles.keypadRow}>*/}
      {/*  <View style={styles.keypadButton}>*/}
      {/*    <Text style={styles.keypadNumber}>4</Text>*/}
      {/*  </View>*/}
      {/*  <View style={styles.keypadButton}>*/}
      {/*    <Text style={styles.keypadNumber}>5</Text>*/}
      {/*  </View>*/}
      {/*  <View style={styles.keypadButton}>*/}
      {/*    <Text style={styles.keypadNumber}>6</Text>*/}
      {/*  </View>*/}
      {/*</View>*/}
      {/*<View style={styles.keypadRow}>*/}
      {/*  <View style={styles.keypadButton}>*/}
      {/*    <Text style={styles.keypadNumber}>7</Text>*/}
      {/*  </View>*/}
      {/*  <View style={styles.keypadButton}>*/}
      {/*    <Text style={styles.keypadNumber}>8</Text>*/}
      {/*  </View>*/}
      {/*  <View style={styles.keypadButton}>*/}
      {/*    <Text style={styles.keypadNumber}>9</Text>*/}
      {/*  </View>*/}
      {/*</View>*/}
      {/*<View style={styles.keypadRow}>*/}
      {/*  <View style={styles.keypadButton}>*/}
      {/*    <Text> </Text>*/}
      {/*  </View>*/}
      {/*  <View style={styles.keypadButton}>*/}
      {/*    <Text style={styles.keypadNumber}>0</Text>*/}
      {/*  </View>*/}
      {/*  <View style={styles.keypadButton}>*/}
      {/*    <Text style={styles.keypadDeleteText}>Delete</Text>*/}
      {/*  </View>*/}
      {/*</View>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  keypadContainer: {
    height: '55%',
    width: '100%',
    backgroundColor: '#191919',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  keypadRow: {
    display: 'flex',
    flexDirection: 'row',
    height: '25%'
  },
  keypadButton: {
    width: '33%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  keypadNumber: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Avenir',
    fontWeight: '500'
  },
  keypadDeleteText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Avenir',
    fontWeight: '800',
    letterSpacing: 2,
    textTransform: 'uppercase'
  }
});

export default Keypad;
