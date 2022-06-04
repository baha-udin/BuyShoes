import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IconStar} from '../../../Assets';

const Star = () => {
  return (
    <View>
      <Image source={IconStar} style={styles.icon} />
    </View>
  );
};

export default Star;

const styles = StyleSheet.create({
  icon: {
    width: 14,
    height: 14,
  },
});
