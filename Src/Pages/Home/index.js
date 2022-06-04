import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  useColorScheme,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {fonts, ResWidth, ResHeight} from '../../Utils';
import {
  Header,
  BannerHome,
  Categories,
  CardProduct,
  Gap,
} from './../../Components';
import {BGHome} from './../../Assets';
import {styles} from './style';
import {Item1, Item2, Item3} from './../../Assets';

const Home = ({navigation}) => {
  const isDark = useColorScheme === 'light';
  const dataProduts = [
    {
      name: 'Sepatu Jogging',
      icon: Item1,
      price: 50000,
      description:
        'Halo Sista, Welcome to Modernshoes. Semua sepatu yang ada di store kami asalnya import ya Sis, 100% ORIGINAL. Jadi dijamin untuk kualitas pasti bagus banget, gak akan kecewa deh. Untuk Model yang kami jual pun selalu Up to Date mengikuti tren di Asia Timur, so silahkan dipilih pilih dulu, kalau ada yang mau ditanyakan jangan ragu chat CS kita yang always online. Happy Shopping !',
      category: 'shoes',
    },
    {
      name: 'Hodie casual',
      icon: Item2,
      price: 75000,
      description:
        'Halo Sista, Welcome to Modernshoes. Semua sepatu yang ada di store kami asalnya import ya Sis, 100% ORIGINAL. Jadi dijamin untuk kualitas pasti bagus banget, gak akan kecewa deh. Untuk Model yang kami jual pun selalu Up to Date mengikuti tren di Asia Timur, so silahkan dipilih pilih dulu, kalau ada yang mau ditanyakan jangan ragu chat CS kita yang always online. Happy Shopping !',
      category: 'tshirt',
    },
    {
      name: 'Celana Panjang',
      icon: Item2,
      price: 45000,
      description:
        'Halo Sista, Welcome to Modernshoes. Semua sepatu yang ada di store kami asalnya import ya Sis, 100% ORIGINAL. Jadi dijamin untuk kualitas pasti bagus banget, gak akan kecewa deh. Untuk Model yang kami jual pun selalu Up to Date mengikuti tren di Asia Timur, so silahkan dipilih pilih dulu, kalau ada yang mau ditanyakan jangan ragu chat CS kita yang always online. Happy Shopping !',
      category: 'tshirt',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar statusBarStyle={isDark ? 'light-content' : 'dark-content'} />
      <ImageBackground source={BGHome} style={styles.background}>
        <Header home />
        <Gap height={12} />
        <BannerHome
          title="Hoodie Collection"
          description="Latest shoe recommendations
which is being hit right now"
          onPress={() => navigation.navigate('MainMenu', {screen: 'Product'})}
        />
      </ImageBackground>

      <ScrollView vertical style={styles.wrapContent}>
        {/* Section Categories */}
        <View>
          <View style={styles.wrapTitle}>
            <Text style={styles.title}>CATEGORIES</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MainMenu', {screen: 'Products'})
              }>
              <Text style={styles.description}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {dataProduts.map((item, index) => {
              return (
                <CardProduct
                  key={index}
                  image={item.icon}
                  title={item.name}
                  onPress={() => navigation.navigate('Detail', item)}
                />
              );
            })}
          </ScrollView>
        </View>
        <Gap height={20} />
        {/* Section New Products */}
        <View>
          <View style={styles.wrapTitle}>
            <Text style={styles.title}>New Products</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MainMenu', {screen: 'Products'})
              }>
              <Text style={styles.description}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {dataProduts.map((item, index) => {
              return (
                <CardProduct
                  key={index}
                  image={item.icon}
                  title={item.name}
                  onPress={() => navigation.navigate('Detail', item)}
                />
              );
            })}
          </ScrollView>
        </View>
        <Gap height={20} />
        {/* Dummy */}
        <View>
          <View style={styles.wrapTitle}>
            <Text style={styles.title}>CATEGORIES</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MainMenu', {screen: 'Products'})
              }>
              <Text style={styles.description}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {dataProduts.map((item, index) => {
              return (
                <CardProduct
                  key={index}
                  image={item.icon}
                  title={item.name}
                  onPress={() => navigation.navigate('Detail', item)}
                />
              );
            })}
          </ScrollView>
        </View>
        <Gap height={20} />
        <View>
          <View style={styles.wrapTitle}>
            <Text style={styles.title}>CATEGORIES</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MainMenu', {screen: 'Products'})
              }>
              <Text style={styles.description}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {dataProduts.map((item, index) => {
              return (
                <CardProduct
                  key={index}
                  image={item.icon}
                  title={item.name}
                  onPress={() => navigation.navigate('Detail', item)}
                />
              );
            })}
          </ScrollView>
        </View>
        <Gap height={20} />
      </ScrollView>
    </View>
  );
};

export default Home;
