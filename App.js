import React from 'react';
import type { Node } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Keypad from './components/Keypad';
import Passcode from './components/Passcode';

const App: () => Node = () => {
  let passcodeGuess = '';
  let passcode = '0000';

  const onButtonPress = (keypress) => {
    console.log(keypress);
    passcodeGuess += keypress;
    validate();
  };

  const validate = () => {
    if (passcodeGuess.length === passcode.length) {
      console.log(passcodeGuess === passcode);
      passcodeGuess = '';
    }
  };

  const backgroundStyle = {
    backgroundColor: '#101010'
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'dark-content'} />
      <Passcode passcode={passcode} />
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
