import {StyleSheet} from 'react-native';
import {containerItem} from '../../theme/colors';

export default StyleSheet.create({
  item: {
    backgroundColor: containerItem,
    padding: 10,
    margin: 10,
    flex: 1,
    borderRadius: 5,
  },
  title: {
    marginTop: 10,
    fontSize: 22,
    color: 'gray',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});
