import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Gap} from '../../Components';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? (
        <Ionicons name="home" style={styles.active} />
      ) : (
        <Ionicons name="home-outline" style={styles.inActive} />
      );
    case 'Products':
      return focus ? (
        <Ionicons name="md-cube" style={styles.active} />
      ) : (
        <Ionicons name="md-cube-outline" style={styles.inActive} />
      );
    case 'Orders':
      return focus ? (
        <Ionicons name="md-reader" style={styles.active} />
      ) : (
        <Ionicons name="md-reader-outline" style={styles.inActive} />
      );
    case 'Profile':
      return focus ? (
        <MaterialCommunityIcons name="account-circle" style={styles.active} />
      ) : (
        <MaterialCommunityIcons
          name="account-circle-outline"
          style={styles.inActive}
        />
      );
    default:
      return <Ionicons name="home" style={styles.active} />;
  }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.wrapIcon}>
            <Icon label={label} focus={isFocused} />
            <Gap height={4} />
            <Text>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 20,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  wrapIcon: {
    alignItems: 'center',
  },
  active: {color: 'black', fontSize: 30},
  inActive: {color: 'black', fontSize: 30},
});
