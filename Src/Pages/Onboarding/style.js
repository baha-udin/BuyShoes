import {StyleSheet} from 'react-native';
import {ResWidth, ResHeight} from '../../Utils';
import {Colors} from '../../Utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  wrapSwiper: {
    height: '90%',
  },
  wrapBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageOnboarding: {
    width: 223,
    height: 273,
    resizeMode: 'contain',
  },
  title: {
    fontSize: ResWidth(19),
    fontWeight: '600',
    color: Colors.text.primary,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.text.secondary,
    marginBottom: ResHeight(60),
  },
  wrapCTALogin: {
    width: 155,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: ResWidth(36),
    borderRadius: 10,
    marginRight: 16,
  },
  textLogin: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.text.primary,
  },
  wrapRegister: {
    width: 155,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: ResWidth(36),
    borderRadius: 10,
    marginRight: 20,
  },
});
