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
  seeDescription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    paddingVertical: 20,
    borderColor: Colors.text.primary,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 24,
  },
});
