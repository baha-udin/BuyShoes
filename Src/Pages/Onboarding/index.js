import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './style';
import Onboarding from 'react-native-onboarding-swiper';

import {Splash1, Splash2, Splash3} from '../../Assets/Images';

const OnBoarding = ({navigation}) => {
  const navigateLogin = () => {
    navigation.navigate('Login');
  };
  const navigateRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapSwiper}>
        <Onboarding
          bottomBarHeight={100}
          bottomBarColor={'white'}
          showSkip={false}
          showNext={false}
          showDone={false}
          containerStyles={styles.wrapSwiper}
          titleStyles={styles.title}
          subTitleStyles={styles.description}
          pages={[
            {
              backgroundColor: '#fff',
              image: <Image source={Splash1} style={styles.imageOnboarding} />,
              title: 'ORIGINAL PRODUCT',
              subtitle:
                'Original with 1000 product from a lot of  different brand accros the world. buy so easy with just simple step then your item will send it.',
            },
            {
              backgroundColor: '#fff',
              image: <Image source={Splash2} style={styles.imageOnboarding} />,
              title: 'FREE SHIPPING',
              subtitle:
                'Original with 1000 product from a lot of  different brand accros the world. buy so easy with just simple step then your item will send it.',
            },
            {
              backgroundColor: '#fff',
              image: <Image source={Splash3} style={styles.imageOnboarding} />,
              title: 'FAST DELIVERY',
              subtitle:
                'Original with 1000 product from a lot of  different brand accros the world. buy so easy with just simple step then your item will send it.',
            },
          ]}
        />
      </View>

      <View style={styles.wrapBottom}>
        <TouchableOpacity
          style={styles.wrapRegister}
          onPress={navigateRegister}>
          <Text style={styles.textLogin}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapCTALogin} onPress={navigateLogin}>
          <Text style={styles.textLogin}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding;
