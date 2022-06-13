import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {IconPlus, IconMinus} from '../../../Assets/Icons';
import {Colors} from '../../../Utils';

const Counter = ({onValueChange}) => {
  const [value, setValue] = useState(1);
  useEffect(() => {
    onValueChange(value);
  }, [onValueChange, value]);

  const onCount = type => {
    let result = value;
    if (type === 'plus') {
      result = value + 1;
    }
    if (type === 'minus') {
      if (value > 1) {
        result = value - 1;
      }
    }
    setValue(result);
    onValueChange(result);
  };

  return (
    <View style={styles.wrapCounter}>
      <TouchableOpacity
        onPress={() => onCount('minus')}
        style={styles.wrapTouch}>
        <Image source={IconMinus} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.number}>{value}</Text>
      <TouchableOpacity
        onPress={() => onCount('plus')}
        style={styles.wrapTouch}>
        <Image source={IconPlus} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  wrapCounter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background.gray,
    borderRadius: 10,
    paddingVertical: 4,
  },
  number: {
    marginHorizontal: 10,
    fontSize: 16,
    color: Colors.text.primary,
    fontWeight: '400',
  },
  wrapTouch: {
    paddingLeft: 4,
    paddingVertical: 8,
  },
});
