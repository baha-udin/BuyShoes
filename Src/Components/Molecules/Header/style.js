import {Platform, StyleSheet} from 'react-native';
import {Colors, ResHeight, ResWidth} from '../../../Utils';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Platform.OS == 'ios' ? 60 : 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  wrapSearch: {
    width: '85%',
    flexDirection: 'row',
  },
  textInput: {
    borderRadius: 10,
    paddingVertical: 14,
    backgroundColor: '#3382D1',
    paddingHorizontal: 50,
    borderColor: 'white',
    borderWidth: 0.5,
    color: 'white',
    width: '100%',
    fontSize: 15,
  },

  WrapiconSearch: {
    position: 'absolute',
    left: ResWidth(18),
    top: ResHeight(14),
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
});
