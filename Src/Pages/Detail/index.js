import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {styles} from './style';
import {Button, CardRelatedItems, Gap, Header} from '../../Components';
import {Item1, IconNext, Item3, Item4, Item5} from '../../Assets';
import {Star} from '../../Components';

const Detail = ({route, navigation}) => {
  const data = route.params;
  const isDarkMode = useColorScheme === 'dark';

  const dataRelated = [
    {
      img: Item5,
      title: 'NMD_R1 SHOES',
      price: 125000,
      description:
        'Halo Sista, Welcome to Modernshoes. Semua sepatu yang ada di store kami asalnya import ya Sis, 100% ORIGINAL. Jadi dijamin untuk kualitas pasti bagus banget, gak akan kecewa deh. Untuk Model yang kami jual pun selalu Up to Date mengikuti tren di Asia Timur, so silahkan dipilih pilih dulu, kalau ada yang mau ditanyakan jangan ragu chat CS kita yang always online. Happy Shopping !',
      category: 'shoes',
    },
    {
      img: Item4,
      title: 'Air Jordan',
      price: 225000,
      description:
        'Halo Sista, Welcome to Modernshoes. Semua sepatu yang ada di store kami asalnya import ya Sis, 100% ORIGINAL. Jadi dijamin untuk kualitas pasti bagus banget, gak akan kecewa deh. Untuk Model yang kami jual pun selalu Up to Date mengikuti tren di Asia Timur, so silahkan dipilih pilih dulu, kalau ada yang mau ditanyakan jangan ragu chat CS kita yang always online. Happy Shopping !',
      category: 'shoes',
    },
    {
      img: Item5,
      title: 'Nike Sports',
      price: 325000,
      description:
        'Halo Sista, Welcome to Modernshoes. Semua sepatu yang ada di store kami asalnya import ya Sis, 100% ORIGINAL. Jadi dijamin untuk kualitas pasti bagus banget, gak akan kecewa deh. Untuk Model yang kami jual pun selalu Up to Date mengikuti tren di Asia Timur, so silahkan dipilih pilih dulu, kalau ada yang mau ditanyakan jangan ragu chat CS kita yang always online. Happy Shopping !',
      category: 'shoes',
    },
    {
      img: Item4,
      title: 'NMD_R1 SHOES',
      price: 125000,
      description:
        'Halo Sista, Welcome to Modernshoes. Semua sepatu yang ada di store kami asalnya import ya Sis, 100% ORIGINAL. Jadi dijamin untuk kualitas pasti bagus banget, gak akan kecewa deh. Untuk Model yang kami jual pun selalu Up to Date mengikuti tren di Asia Timur, so silahkan dipilih pilih dulu, kalau ada yang mau ditanyakan jangan ragu chat CS kita yang always online. Happy Shopping !',
      category: 'shoes',
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header
        detail
        onBack={() => navigation.navigate('MainMenu', {screen: 'Home'})}
      />
      {/* content */}
      <ScrollView style={styles.wrap}>
        <View style={styles.cardBanner}>
          <Image source={{uri: data.image}} style={styles.imgBanner} />
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
          <Gap height={16} />
          <Text style={styles.price}>Rp. {data.price}</Text>
        </View>

        <Gap height={24} />
        {/* See Description */}
        <View style={styles.wrapDescription}>
          <Text style={styles.description}>Description:</Text>
          <Text style={styles.text}>{data.description}</Text>
        </View>
        <Gap height={28} />
        {/* Related items */}
        <View style={styles.moreProducts}>
          <View style={styles.wrapRelated}>
            <Text style={styles.description}>Related Items</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MainMenu', {screen: 'Products'})
              }>
              <Text style={styles.seemore}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <View>
            <ScrollView horizontal>
              {dataRelated.map((item, index) => {
                return (
                  <CardRelatedItems
                    key={index}
                    title={item.title}
                    price={item.price}
                    img={item.img}
                    onPress={() => navigation.navigate('Detail', dataRelated)}
                  />
                );
              })}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <View style={styles.wrapBottom}>
        <TouchableOpacity style={styles.wrapATC}>
          <Text style={styles.label}>Add to cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapBuy}>
          <Text style={styles.label}>Buy now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detail;
