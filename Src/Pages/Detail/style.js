import {StyleSheet} from 'react-native';
import {Colors, ResHeight, ResWidth} from '../../Utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  cardBanner: {
    // marginTop: -50,
    marginHorizontal: 20,
    borderRadius: 15,
    paddingTop: 25,
    paddingBottom: 12,
    backgroundColor: Colors.background.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapTitle: {
    paddingHorizontal: 30,
  },
  imgBanner: {
    width: ResHeight(202),
    height: ResHeight(202),
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.4,
    color: Colors.text.primary,
    marginBottom: 10,
  },
  sectionRating: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  wrapStar: {
    flexDirection: 'row',
    marginRight: 12,
  },
  moreReview: {
    fontSize: 14,
    color: Colors.text.purple,
    fontWeight: '400',
  },
  price: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.text.orange,
  },
  wrapDescription: {
    paddingHorizontal: 24,
  },
  description: {
    fontSize: ResWidth(15),
    fontWeight: '500',
    letterSpacing: 0.4,
    marginBottom: 12,
    color: Colors.text.black,
  },
  text: {
    fontSize: ResWidth(14),
    fontWeight: '400',
    letterSpacing: 0.4,
    lineHeight: 20,
    color: Colors.text.secondary,
  },
  wrapBottom: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 30,
  },
  wrapBuy: {
    width: 155,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: ResWidth(36),
    borderRadius: 10,
    marginRight: 16,
  },
  wrapATC: {
    width: 155,
    backgroundColor: Colors.white,

    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: ResWidth(24),
    borderRadius: 10,
    marginRight: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.text.primary,
  },
});
