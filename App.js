import React, { useState } from 'react';
import type { Node } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Keypad from './components/Keypad';
import Passcode from './components/Passcode';

const App: () => Node = () => {
  const [passcode, setPasscode] = useState('0000');
  const [passcodeGuess, setPasscodeGuess] = useState('');

  const onButtonPress = (keypress) => {
    if (passcodeGuess.length < passcode.length - 1) {
      setPasscodeGuess(passcodeGuess + keypress);
    } else {
      setPasscodeGuess(passcodeGuess + keypress);
      validate();
    }
  };

  const validate = () => {
    // if (passcodeGuess.length === passcode.length) {
    //   console.log(passcodeGuess);
    setPasscodeGuess('');
    // }
  };

  const backgroundStyle = {
    backgroundColor: '#101010'
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'dark-content'} />
      <Passcode passcode={passcode} passcodeGuess={passcodeGuess} />
      <Keypad onButtonPress={onButtonPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400'
  },
  highlight: {
    fontWeight: '700'
  }
});

export default App;
