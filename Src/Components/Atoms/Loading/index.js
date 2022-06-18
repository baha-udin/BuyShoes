import React from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';
import {Colors} from '../../../Utils';

const Loading = ({visible}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="small"
        color={Colors.border}
        visible={visible}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerTextStyle: {
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default Loading;
