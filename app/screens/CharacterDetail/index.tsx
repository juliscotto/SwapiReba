/* eslint-disable max-statements */
import React from 'react';
import {SafeAreaView, Text, TouchableHighlight, View} from 'react-native';
import styles from './styles';
import {CharacterInterface} from '../../interfaces/characterInterface';
import {NativeStackScreenProps, RootStackParamList} from '../../../App';
import ElementsList from '../../components/ElementsList';
import {getFilmNumber} from '../../components/ElementsList/utils';

type Props = NativeStackScreenProps<RootStackParamList, 'CharacterDetail'>;

function CharacterDetail({navigation, route}: Props) {
  const characterInfo: CharacterInterface = route.params.characterInfo;

  const filmElements = (films: string[]) => {
    return films.map((item, index) => {
      return (
        <TouchableHighlight
          key={index}
          style={styles.item}
          onPress={() => navigation.navigate('FilmDetail', {filmUrl: item})}>
          <Text style={styles.filmTitle}>{`Star Wars ${getFilmNumber(
            item,
          )}`}</Text>
        </TouchableHighlight>
      );
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={[styles.textDetail, styles.title]}>
          {characterInfo.name}
        </Text>
        <Text style={[styles.textDetail, styles.subtitle]}>
          Gender: {characterInfo.gender}
        </Text>
        <Text style={[styles.textDetail, styles.subtitle]}>
          Birt Year: {characterInfo.birth_year}
        </Text>
        <Text style={[styles.textDetail, styles.subtitle]}>
          Height: {characterInfo.height}
        </Text>
        <Text style={[styles.textDetail, styles.subtitle]}>
          Eye Color: {characterInfo.eye_color}
        </Text>
        <Text style={[styles.textDetail, styles.subtitle]}>
          Hair Color: {characterInfo.hair_color}
        </Text>
        <Text style={[styles.textDetail, styles.subtitle]}>
          Mass: {characterInfo.mass}
        </Text>
        <ElementsList
          elementContent={filmElements(characterInfo.films)}
          title="Films"
        />
      </View>
    </SafeAreaView>
  );
}

export default CharacterDetail;
