import {StyleSheet} from 'react-native';
import {backgroundColor} from '../../theme/colors';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  container: {
    backgroundColor: backgroundColor,
    flex: 1,
    height: '100%',
  },
  getPeopleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    height: 50,
    width: 100,
  },
});
