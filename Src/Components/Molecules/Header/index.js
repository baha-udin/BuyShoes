import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import {styles} from './style';
import {
  IconCart,
  IconSearch,
  IconBack,
  IconLove,
  IconShare,
  IconNext,
} from '../../../Assets';

const Header = ({home, detail, onPress, onBack}) => {
  if (home) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.wrapSearch}>
          <TouchableOpacity style={styles.WrapiconSearch}>
            <Image source={IconSearch} />
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="Cari barang Kamu disini"
            placeholderTextColor={'white'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapIcon}>
          <Image source={IconCart} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
  if (detail) {
    return (
      <View style={styles.container}>
        <View style={styles.wrapLeft}>
          <TouchableOpacity style={styles.wrapIcon} onPress={onBack}>
            <Image source={IconBack} />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapRight}>
          <TouchableOpacity style={styles.wrapIcon}>
            <Image source={IconLove} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrapIcon}>
            <Image source={IconShare} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.wrapIcon} onPress={onPress}>
        <Image source={IconBack} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
