import {Platform, StyleSheet} from 'react-native';
import {Colors, ResHeight, ResWidth} from '../../../Utils';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Platform.OS == 'ios' ? 50 : 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  wrapSearch: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: Platform.OS === 'ios' ? ResWidth(14) : ResWidth(0),
    backgroundColor: '#3382D1',
  },
  textInput: {
    color: 'white',
    width: '100%',
    fontSize: 15,
    paddingLeft: 20,
  },

  WrapiconSearch: {
    paddingLeft: ResWidth(16),
  },
  wrapIcon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapRight: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'stretch',
  },
  wrapLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
  },
  titleHeader: {
    fontSize: 20,
    fontWeight: '400',
    marginLeft: 8,
    letterSpacing: 0.8,
    color: Colors.text.primary,
  },
});
