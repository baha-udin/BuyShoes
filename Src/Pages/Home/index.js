import React, {useState, useEffect} from 'react';
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
  const [dataAPI, setDataAPI] = useState([]);

  const getData = () => {
    try {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
          setDataAPI(json);
        });
    } catch (error) {
      console.log('Gagal ambil data');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={BGHome} style={styles.background}>
        <Header home />
        <Gap height={20} />
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
                navigation.navigate('MainMenu', {screen: 'Products', dataAPI})
              }>
              <Text style={styles.description}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {dataAPI.map((item, index) => {
              return (
                <CardProduct
                  key={index}
                  image={{uri: item.image}}
                  title={item.title}
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
                navigation.navigate('MainMenu', {screen: 'Products', dataAPI})
              }>
              <Text style={styles.description}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {dataAPI.map((item, index) => {
              return (
                <CardProduct
                  key={index}
                  image={{uri: item.image}}
                  title={item.title}
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
                navigation.navigate('MainMenu', {screen: 'Products', dataAPI})
              }>
              <Text style={styles.description}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {dataAPI.map((item, index) => {
              return (
                <CardProduct
                  key={index}
                  image={{uri: item.image}}
                  title={item.title}
                  onPress={() => navigation.navigate('Detail', item)}
                />
              );
            })}
          </ScrollView>
        </View>
        <Gap height={20} />
        <View>
          <View style={styles.wrapTitle}>
            <Text style={styles.title}>Limited Edition</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MainMenu', {screen: 'Products', dataAPI})
              }>
              <Text style={styles.description}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {dataAPI.map((item, index) => {
              return (
                <CardProduct
                  key={index}
                  image={{uri: item.image}}
                  title={item.title}
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
