import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {Person1, Person2} from '../../../Assets';
import Button from '../Button';
import Gap from '../Gap';

const BannerHome = ({navigation, title, description, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Gap height={20} />
        <TouchableOpacity style={styles.wrapButton} onPress={onPress}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      </View>
      <Gap height={14} />
      <View style={styles.wrapImage}>
        <Image source={Person1} style={styles.imgBanner} />
      </View>
    </View>
  );
};

export default BannerHome;
