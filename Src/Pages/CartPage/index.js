import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Header, Counter, Gap} from '../../Components';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';

const CartPage = ({route, navigation}) => {
  const dataCheckout = route.params;
  const [totalItem, setTotalItem] = useState([dataCheckout.totalItem]);

  useEffect(() => {
    console.log(dataCheckout);
  }, []);

  const onCounterChange = () => {
    setTotalItem(+1);
  };
  return (
    <View style={styles.container}>
      <Header cart onBack={() => navigation.navigate('Detail')} />
      <View style={styles.content}>
        {/* Bagian Content */}
        <View style={styles.wrapCard}>
          <View style={styles.cardLeft}>
            <Image
              source={{uri: dataCheckout.image}}
              style={{width: 50, height: 50, resizeMode: 'contain'}}
            />
          </View>
          <View style={styles.cardRight}>
            <View style={styles.wrapTitle}>
              <Text style={styles.titleCard}>
                {dataCheckout.title.length < 15
                  ? dataCheckout.title
                  : dataCheckout.title.substring(0, 15)}
                ...
              </Text>
              <TouchableOpacity>
                <Feather name="trash" style={styles.iconTrash} />
              </TouchableOpacity>
            </View>
            <Gap height={12} />
            <Text style={styles.description}>
              {dataCheckout.description.length < 15
                ? dataCheckout.description
                : dataCheckout.description.substring(0, 15)}
              ...
            </Text>
            <View style={styles.wrapPrice}>
              <Text style={styles.price}>Rp. {dataCheckout.price}.00</Text>
              <Counter onValueChange={onCounterChange} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartPage;
