import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import styles from './styles';
import {RootStackParamList} from '../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Icon} from 'react-native-elements';

interface Props {
  characterInfo: any;
  index: number;
  isFavorite: boolean;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Characters'>;
  setNewData: (value: number) => Promise<void>;
}

function Character({
  characterInfo,
  index,
  isFavorite,
  navigation,
  setNewData,
}: Props) {
  return (
    <TouchableHighlight
      style={styles.item}
      key={index}
      onPress={() =>
        navigation.navigate('CharacterDetail', {characterInfo: characterInfo})
      }>
      <View style={styles.nameContainer}>
        <Text style={styles.title}>{characterInfo.name}</Text>
        <Icon
          name={'star'}
          type="ionicon"
          color={isFavorite ? 'black' : '#887700'}
          size={20}
          style={styles.starIcon}
          onPress={() => setNewData(index)}
        />
      </View>
    </TouchableHighlight>
  );
}

export default Character;
