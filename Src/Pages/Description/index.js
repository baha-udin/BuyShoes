import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from '../../Components';
import {Colors} from '../../Utils';

const Description = ({route, navigation}) => {
  const data = route.params;
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.navigate('Detail')} />
      <View style={{paddingHorizontal: 24}}>
        <Text style={styles.text}>{data.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 14,
    color: Colors.text.primary,
    letterSpacing: 0.3,
    flexWrap: 'wrap',
    lineHeight: 30,
  },
});

export default Description;
