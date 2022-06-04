import {StyleSheet} from 'react-native';
import {Colors, ResHeight, ResWidth} from '../../Utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: ResHeight(30),
    paddingHorizontal: ResWidth(30),
    backgroundColor: Colors.white,
  },
  titlePage: {
    color: Colors.text.primary,
    fontSize: ResWidth(20),
    fontWeight: '500',
  },
  wrapDesc: {
    flexDirection: 'row',
    marginTop: 10,
  },
  descPage: {
    fontSize: 15,
    fontWeight: '400',
    color: Colors.text.secondary,
    marginRight: 8,
  },
  CtaLogin: {
    fontSize: 15,
    fontWeight: '400',
    color: Colors.text.purple,
    marginRight: 8,
  },
  wrapButton: {
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
