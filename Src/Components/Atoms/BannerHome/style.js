import {StyleSheet} from 'react-native';
import {Colors} from '../../../Utils';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    marginHorizontal: 14,
    borderRadius: 15,
    paddingTop: 22,
    paddingHorizontal: 22,
    backgroundColor: Colors.blue2,
  },
  wrapText: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '60%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
  },
  wrapImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBanner: {
    width: 132,
    resizeMode: 'contain',
  },
});

export default styles;
