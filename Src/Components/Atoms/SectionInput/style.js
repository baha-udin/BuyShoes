import {StyleSheet} from 'react-native';
import {Colors, ResWidth, ResHeight} from '../../../Utils';

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.text.secondary,
  },
  input: {
    borderColor: Colors.border.input,
    borderWidth: 1,
    borderRadius: 10,
    padding: ResWidth(10),
    color: Colors.text.primary,
    fontSize: 14,
    fontWeight: '400',
  },
});

export default styles;
