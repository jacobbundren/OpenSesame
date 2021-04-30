import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Passcode = (props) => {
  let passcodeBubbles = [];

  for (let char in props.passcode) {
    passcodeBubbles.push(
      <View
        key={char}
        style={[
          styles.passcodeMaskChar,
          props.passcodeGuess[char]
            ? styles.passcodeMaskFilled
            : styles.passcodeMaskChar
        ]}
      />
    );
  }

  return (
    <View style={styles.passcodeContainer}>
      <Text style={styles.passcodeText}>Enter Passcode</Text>
      <View style={styles.passcodeMaskContainer}>{passcodeBubbles}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  passcodeContainer: {
    height: '45%',
    width: '100%',
    backgroundColor: '#101010',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  passcodeText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    fontFamily: 'Avenir',
    letterSpacing: 4,
    textTransform: 'uppercase'
  },
  passcodeMaskContainer: {
    height: 50,
    width: 250,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20
  },
  passcodeMaskChar: {
    color: '#fff',
    height: 40,
    width: 40,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    borderColor: '#fff',
    borderWidth: 1
  },
  passcodeMaskFilled: {
    backgroundColor: '#fff'
  }
});

export default Passcode;
