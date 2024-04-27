import {StyleSheet} from 'react-native';
import {backgroundColor} from '../../theme/colors';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  container: {
    backgroundColor: backgroundColor,
  },
  getPeopleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    height: 50,
    width: 100,
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
});
