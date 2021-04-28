import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import KeypadRow from './KeypadRow';

const Keypad = (props) => {
  return (
    <View style={styles.keypadContainer}>
      <KeypadRow
        numbers={[
          { val: 1, isNum: true },
          { val: 2, isNum: true },
          { val: 3, isNum: true }
        ]}
        onButtonPress={props.onButtonPress}
      />
      <KeypadRow
        numbers={[
          { val: 4, isNum: true },
          { val: 5, isNum: true },
          { val: 6, isNum: true }
        ]}
        onButtonPress={props.onButtonPress}
      />
      <KeypadRow
        numbers={[
          { val: 7, isNum: true },
          { val: 8, isNum: true },
          { val: 9, isNum: true }
        ]}
        onButtonPress={props.onButtonPress}
      />
      <KeypadRow
        numbers={[
          { val: null, isNum: false },
          { val: 0, isNum: true },
          { val: 'Delete', isNum: false }
        ]}
        onButtonPress={props.onButtonPress}
      />
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
