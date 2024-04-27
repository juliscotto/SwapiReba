/* eslint-disable max-statements */
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import {FilmInterface} from '../../interfaces/characterInterface';
import {NativeStackScreenProps, RootStackParamList} from '../../../App';
import styles from './styles';
import Loader from '../../components/Loader';
import useGetElement from '../../utils/useGetElement';

type Props = NativeStackScreenProps<RootStackParamList, 'FilmDetail'>;

function FilmDetail({navigation, route}: Props) {
  const filmUrl: string = route.params.filmUrl;
  const {data, isPending, error} = useGetElement({
    url: filmUrl,
    queryKey: 'character',
  });
  const [filmInfo, setFilmInfo] = useState<FilmInterface>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (!isPending) {
      setFilmInfo(data);
      navigation.setOptions({
        title: data.title,
      });
      setIsLoading(false);
    }
    return () => {
      setFilmInfo(undefined);
    };
  }, [isPending]);

  if (error) return 'An error has occurred: ' + error.message;

  return isPending || isLoading || !filmInfo ? (
    <Loader />
  ) : (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={[styles.textDetail, styles.title]}>
            {filmInfo.title}
          </Text>
          <Text style={[styles.textDetail, styles.subtitle]}>
            {filmInfo.release_date}
          </Text>
          <Text style={[styles.textDetail, styles.subtitle]}>
            Director: {filmInfo.director}
          </Text>
          <Text style={[styles.textDetail, styles.subtitle]}>
            Episode: {filmInfo.episode_id}
          </Text>
          <Text style={[styles.textDetail, styles.subtitle]}>
            Producer: {filmInfo.producer}
          </Text>
          <Text style={[styles.textDetail, styles.subtitle]}>
            {`Opening Crawl:`}
          </Text>
          <Text style={[styles.textDetail, styles.opening]}>
            {`\n${filmInfo.opening_crawl}`}
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default FilmDetail;
