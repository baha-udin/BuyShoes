import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

const HeaderTitle = ({title, desc, CTA, onPress}) => {
  return (
    <View>
      <Text style={styles.titlePage}>{title}</Text>
      <View style={styles.wrapDesc}>
        <Text style={styles.descPage}>{desc} </Text>
        <TouchableOpacity onPress={onPress} style={styles.wrapCTA}>
          <Text style={styles.CtaLogin}>{CTA}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderTitle;
