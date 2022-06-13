import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {styles} from './style';
import {HeaderTitle, Gap, SectionInput, Button} from './../../Components';
import {ResHeight, resWidth, Colors} from '../../Utils';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {Authentication} from '../../../Config';
import {showMessage} from 'react-native-flash-message';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [text, setText] = useState('Login Now');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Data masih ada yang kosong');
    } else {
      setText('On process');
      const data = {
        email: email,
        password: password,
      };
      signInWithEmailAndPassword(Authentication, data.email, data.password)
        .then(success => {
          console.log(success);
          setText('Login now');
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
        });
      navigation.navigate('MainMenu');
      setText('Login now');
    }
  };
  return (
    <View style={styles.container}>
      <HeaderTitle
        title={'Welcome to Login'}
        desc="Don`t have an account?"
        CTA={'Register here'}
        onPress={() => navigation.navigate('Register')}
      />
      <Gap height={26} />
      <SectionInput
        label="Email"
        placeholder="Input your email"
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <Gap height={ResHeight(20)} />
      <SectionInput
        label="Password"
        placeholder="Input your password"
        value={password}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
      />

      <Gap height={ResHeight(25)} />
      <TouchableOpacity style={styles.wrapButton} onPress={handleLogin}>
        <Text style={styles.title}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
