import {StyleSheet} from 'react-native';
import {Colors, fonts} from '../../../Utils';

export const styles = StyleSheet.create({
  containerCategories: {
    flexDirection: 'column',
    paddingBottom: 16,
  },
  wrapTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  title: {
    fontWeight: '600',
    fontSize: 17,
    letterSpacing: 0.4,
    color: Colors.text.primary,
    textTransform: 'uppercase',
  },
  description: {
    fontWeight: '400',
    fontSize: 14,
    letterSpacing: 0.4,
    color: Colors.text.purple,
  },
});
