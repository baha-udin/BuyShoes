import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {styles} from './style';

const Products = ({route, navigation}) => {
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

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.wrapItem}
        onPress={() => navigation.navigate('Detail', dataAPI)}>
        <Image source={{uri: item.image}} style={styles.image} />
        {/* {address.length < 35 ? `${address}` : `${address.substring(0, 32)}...`} */}
        <Text style={styles.title}>
          {item.title < 15 ? item.title : item.title.substring(0, 15)}
        </Text>
        <Text tyle={styles.description}>{item.category}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.wrapList}>
        <FlatList
          data={dataAPI}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default Products;
