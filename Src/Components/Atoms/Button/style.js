import {StyleSheet} from 'react-native';
import {Colors, ResWidth, ResHeight} from '../../../Utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    paddingVertical: ResHeight(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: Colors.text.primary,
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 1,
  },
});

export default styles;
