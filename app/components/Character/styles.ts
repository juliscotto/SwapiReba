import {StyleSheet} from 'react-native';
import {tintColor} from '../../theme/colors';

export default StyleSheet.create({
  item: {
    backgroundColor: tintColor,
    padding: 10,
    margin: 10,
    flex: 1,
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  starIcon: {
    alignSelf: 'center',
  },
});
