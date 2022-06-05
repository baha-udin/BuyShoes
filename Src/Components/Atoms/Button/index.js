import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

const Button = ({title, onPress, secondary, onPressSecond}) => {
  if (secondary) {
    <TouchableOpacity style={styles.containerSecond} onPress={onPressSecond}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
