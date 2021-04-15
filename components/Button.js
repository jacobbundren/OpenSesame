import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const Button = (props) => {

  const emitValue = () => {
    return props.value;
  };

  return (
    <TouchableHighlight style={styles.keypadButton} onPress={emitValue()}>
      <View>
        <Text style={styles.keypadNumber} value={1}>
          {props.value}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = {
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
};

export default Button;
