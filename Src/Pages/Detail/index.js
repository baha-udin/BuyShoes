import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from './style';
import {Gap, Header} from '../../Components';
import {Item1, IconNext} from '../../Assets';
import {Star} from '../../Components';

const Detail = ({route, navigation}) => {
  const data = route.params;
  const isDarkMode = useColorScheme === 'dark';
  useEffect(() => {
    console.log(data);
  });
  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header
        detail
        onBack={() => navigation.navigate('MainMenu', {screen: 'Home'})}
      />
      {/* content */}
      <View style={styles.wrap}>
        <View style={styles.cardBanner}>
          <Image source={data.icon} style={styles.imgBanner} />
        </View>
        <Gap height={25} />
        <View style={styles.wrapTitle}>
          <Text style={styles.title}>{data.name}</Text>
          <View style={styles.sectionRating}>
            <View style={styles.wrapStar}>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </View>
            <TouchableOpacity>
              <Text style={styles.moreReview}> See Review</Text>
            </TouchableOpacity>
          </View>
          <Gap height={20} />
          <Text style={styles.price}>Rp. {data.price}</Text>
        </View>
        <Gap height={30} />
        {/* See Description */}
        <TouchableOpacity
          style={styles.seeDescription}
          onPress={() => navigation.navigate('Description', data)}>
          <Text>See Description</Text>
          <Image source={IconNext} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detail;
