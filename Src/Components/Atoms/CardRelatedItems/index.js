import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Colors, ResWidth, ResHeight} from '../../../Utils';
import {Item4, Item5} from './../../../Assets';

const CardRelatedItems = ({img, title, price, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrap} onPress={onPress}>
      <Image source={img} style={styles.wrapImg} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>Rp. {price}</Text>
    </TouchableOpacity>
  );
};

export default CardRelatedItems;

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'column',
    marginRight: 24,
  },
  title: {
    color: Colors.text.black,
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.4,
    marginBottom: 8,
  },
  price: {
    color: Colors.text.orange,
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.4,
  },
  wrapImg: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: ResWidth(138),
    height: ResHeight(100),
    marginBottom: 10,
  },
});
