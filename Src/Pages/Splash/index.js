import React, {useEffect} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {styles} from './style';
import {BackgroundSplash} from './../../Assets/Images/index';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate('Onboarding'), 3000);
  });

  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundSplash} style={styles.wrapBackground}>
        <View style={styles.wrap}>
          <Text style={styles.title}>Jello</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Splash;
