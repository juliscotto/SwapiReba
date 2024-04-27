import {StyleSheet} from 'react-native';
import {backgroundColor, containerItem, tintColor} from '../../theme/colors';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  container: {
    backgroundColor: backgroundColor,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30,
    marginBottom: 2,
  },
  textDetail: {
    color: tintColor,
  },
  subtitle: {
    fontSize: 19,
    fontStyle: 'italic',
  },
  opening: {
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  item: {
    backgroundColor: containerItem,
    padding: 10,
    margin: 10,
    flex: 1,
    borderRadius: 5,
  },
  characterTitle: {
    fontSize: 22,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});
