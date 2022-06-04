import {StyleSheet} from 'react-native';
import {Colors, ResWidth, ResHeight} from '../../../Utils';

const styles = StyleSheet.create({
  titlePage: {
    color: Colors.text.primary,
    fontSize: ResWidth(20),
    fontWeight: '500',
  },
  wrapDesc: {
    flexDirection: 'row',
    marginTop: 10,
    // flexWrap: 'wrap',
  },
  descPage: {
    fontSize: 15,
    fontWeight: '400',
    color: Colors.text.secondary,
    marginRight: 2,
  },
  wrapCTA: {},
  CtaLogin: {
    fontSize: 15,
    fontWeight: '400',
    color: Colors.text.purple,
  },
});

export default styles;
