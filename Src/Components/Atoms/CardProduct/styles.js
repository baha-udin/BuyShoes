import {StyleSheet} from 'react-native';
import {ResWidth, Colors, ResHeight} from '../../../Utils';

export const styles = StyleSheet.create({
  wrapItem: {
    borderRadius: 15,
    paddingHorizontal: 14,
    backgroundColor: Colors.background.gray,
    marginRight: 12,
    paddingVertical: 8,
  },
  imageItem: {
    width: ResWidth(75),
    height: ResHeight(90),
    resizeMode: 'stretch',
  },
});
