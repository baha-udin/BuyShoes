import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import {styles} from './style';
import {HeaderTitle, Gap, SectionInput, Button, Link} from './../../Components';
import {Colors, ResHeight, resWidth, storeData, getData} from '../../Utils';
import CheckBox from '@react-native-community/checkbox';
import {Authentication, Database} from '../../../Config';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {ref, set} from 'firebase/database';

const Register = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleRegister = () => {
    if (
      email === '' ||
      password === '' ||
      fullName === '' ||
      checkPassword === ''
    ) {
      Alert.alert('Data masih ada yang kosong');
    } else if (password != checkPassword) {
      Alert.alert('Password & check password tidak sama');
    } else {
      createUserWithEmailAndPassword(Authentication, email, password)
        .then(success => {
          const data = {
            fullName: fullName,
            email: email,
            password: password,
            uid: success.user.uid,
          };
          // push to firebase database
          set(ref(Database, 'users/' + data.uid + '/'), {
            data,
          });
          // push to local storage
          storeData('user', data);

          console.log('Register sukses');
          navigation.navigate('MainMenu');
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  };
  return (
    <View style={styles.container}>
      <HeaderTitle
        title={'Create your account'}
        desc={'Do you already have account?'}
        CTA={'Sign In'}
        onPress={() => navigation.navigate('Login')}
      />
      <Gap height={26} />
      <ScrollView>
        <SectionInput
          label="Full name"
          placeholder="Input your name"
          value={fullName}
          onChangeText={value => setFullName(value)}
        />
        <Gap height={ResHeight(20)} />
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
        <Gap height={ResHeight(20)} />
        <SectionInput
          label="Re-enter password"
          placeholder="Input your password again"
          value={checkPassword}
          onChangeText={value => setCheckPassword(value)}
          secureTextEntry={true}
        />
        <Gap height={ResHeight(12)} />
        <View style={styles.wrapCheck}>
          <View style={styles.wrapCheckbox}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
              onCheckColor="green"
              tintColors={true ? Colors.text.primary : Colors.text.secondary}
              boxType="square"
              style={{height: 20, width: 20}}
            />
            <Text style={styles.remember}>Remember me</Text>
          </View>
          <Link
            onPress={() => navigation.navigate('Register')}
            label="Forget password?"
          />
        </View>
        <Gap height={ResHeight(24)} />
        <Button title="Create Account" onPress={handleRegister} />
      </ScrollView>
    </View>
  );
};

export default Register;
