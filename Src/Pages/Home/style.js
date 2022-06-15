import {StyleSheet} from 'react-native';
import {Colors, ResHeight, ResWidth} from '../../Utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  background: {
    width: '100%',
    paddingBottom: 50,
  },
  wrapContent: {
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 24,
    backgroundColor: Colors.white,
  },

  wrapTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  wrapItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  spinnerTextStyle: {
    textAlign: 'center',
    justifyContent: 'center',
  },
});
