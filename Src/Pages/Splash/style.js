import {StyleSheet} from 'react-native';
import {Colors} from '../../Utils/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  wrapBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrap: {
    paddingHorizontal: 30,
    paddingVertical: 14,
    backgroundColor: Colors.secondary,
    width: 140,
    borderBottomLeftRadius: 30,
    borderTopEndRadius: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.primary,
  },
});
