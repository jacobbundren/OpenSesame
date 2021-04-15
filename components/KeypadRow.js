import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Button from './Button';

const KeypadRow = (props) => {
  const row = [];

  for (let num in props.numbers) {
    row.push(<Button value={props.numbers[num]} key={num} style={styles.keypadButton}/>);
  }

  return <View style={styles.keypadRow}>{row}</View>;
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

export default KeypadRow;
