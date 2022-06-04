import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../../Utils';

const Link = ({onPress, label}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: {
    textAlign: 'right',
    fontSize: 13,
    fontWeight: '400',
    color: Colors.text.secondary,
  },
});
