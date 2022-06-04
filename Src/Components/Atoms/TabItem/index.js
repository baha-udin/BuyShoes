import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  IconHome,
  IconHomeActive,
  IconOrder,
  IconOrderActive,
  IconProduct,
  IconProductActive,
  IconProfile,
  IconProfileActive,
} from './../../../Assets';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return isFocused ? (
        <Image source={IconHomeActive} style={styles.icon} />
      ) : (
        <Image source={IconHome} style={styles.icon} />
      );
    }
    if (title === 'Product') {
      return isFocused ? (
        <Image source={IconProductActive} style={styles.icon} />
      ) : (
        <Image source={IconProduct} style={styles.icon} />
      );
    }
    if (title === 'Order') {
      return isFocused ? (
        <Image source={IconOrderActive} style={styles.icon} />
      ) : (
        <Image source={IconOrder} style={styles.icon} />
      );
    }
    if (title === 'Profile') {
      return isFocused ? (
        <Image source={IconProfileActive} style={styles.icon} />
      ) : (
        <Image source={IconProfile} style={styles.icon} />
      );
    }
    return <Image source={IconHomeActive} style={styles.icon} />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.textLabel(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: resHeight(8),
    paddingHorizontal: resWidth(30),
  },
  textLabel: active => ({
    fontSize: resWidth(10),
    marginTop: resHeight(4),
    color: active ? Colors.text.menuActive : Colors.text.menuInactive,
  }),
});

export default TabItem;
