import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Item1, Item2, Item3} from '../../../Assets';
import {styles} from './styles';

const CardProduct = ({image, onPress, title, price, description}) => {
  return (
    <TouchableOpacity style={styles.wrapItem} onPress={onPress}>
      <Image source={image} style={styles.imageItem} />
    </TouchableOpacity>
  );
};

export default CardProduct;
