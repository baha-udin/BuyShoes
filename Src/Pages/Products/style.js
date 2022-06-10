import {Dimensions, StyleSheet} from 'react-native';
import {Colors, ResHeight, ResWidth} from '../../Utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray,
    flexWrap: 'wrap',
    marginTop: 50,
  },
  wrapList: {
    paddingHorizontal: 20,
  },
  wrapItem: {
    // width: 175,
    // height: 170,
    width: ResWidth(160),
    height: ResHeight(160),
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginRight: 8,
    marginBottom: 8,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.text.primary,
    textAlign: 'center',
    marginTop: 8,
    paddingLeft: 8,
  },
  description: {
    fontSize: 12,
    color: Colors.text.secondary,
    paddingLeft: 8,
    textAlign: 'center',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
});
