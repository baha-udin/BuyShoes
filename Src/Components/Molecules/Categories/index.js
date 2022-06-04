import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {styles} from './style';
import {CardProduct} from './../../Atoms';
import {Item1, Item2, Item3} from '../../../Assets';

const Categories = () => {
  return (
    <View style={styles.containerCategories}>
      <View style={styles.wrapTitle}>
        <Text style={styles.title}>CATEGORIES</Text>
        <TouchableOpacity>
          <Text style={styles.description}>SEE ALL</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        <CardProduct image={Item1} />
        <CardProduct image={Item2} />
        <CardProduct image={Item3} />
        <CardProduct image={Item1} />
        <CardProduct image={Item2} />
      </ScrollView>
    </View>
  );
};

export default Categories;
