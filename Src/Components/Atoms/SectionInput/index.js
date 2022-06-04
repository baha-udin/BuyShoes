import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './style';
import Gap from '../Gap';
import {Colors} from '../../../Utils';

const SectionInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Gap height={8} />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={Colors.text.secondary}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default SectionInput;
