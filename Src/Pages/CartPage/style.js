import {StyleSheet} from 'react-native';
import {Colors} from '../../Utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.whiteSmoke,
  },
  content: {
    marginTop: 32,
    paddingHorizontal: 20,
  },
  wrapCard: {
    borderRadius: 12,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLeft: {},
  cardRight: {
    width: '75%',
  },
  iconTrash: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  wrapTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleCard: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text.primary,
  },
  description: {
    color: Colors.text.secondary,
    fontWeight: '300',
  },
  wrapPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.text.primary,
  },
});

export default styles;
