import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const Button = (props) => {
  const buttonProps = props.value;
  const buttonValueStyle = buttonProps.isNum
    ? styles.keypadNumber
    : styles.keypadText;

  const emitValue = () => {
    props.onButtonPress(buttonProps.val);
  };

  return (
    <TouchableHighlight
      disabled={buttonProps.val === null}
      style={styles.keypadButton}
      onPress={() => emitValue()}>
      <View>
        <Text style={buttonValueStyle} value={buttonProps.val}>
          {buttonProps.val}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
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
  keypadText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Avenir',
    fontWeight: '800',
    letterSpacing: 2,
    textTransform: 'uppercase'
  }
});

export default Button;
