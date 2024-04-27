import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {tintColor} from '../../theme/colors';
import styles from './styles';

function Loader() {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator
        animating={true}
        style={styles.loaderContainer}
        color={tintColor}
      />
    </View>
  );
}

export default Loader;
