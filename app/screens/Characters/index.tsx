/* eslint-disable max-statements */
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import styles from './styles';
import Character from '../../components/Character';
import {tintColor} from '../../theme/colors';
import useCharacters from './useCharacters';
import {NativeStackScreenProps, RootStackParamList} from '../../../App';
import {useFavorites} from '../../utils/hooks/useFavorites';

type Props = NativeStackScreenProps<RootStackParamList, 'Characters'>;

function Characters({navigation, route}: Props) {
  const queryKey = route.params.queryKey;
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    error,
  } = useCharacters({queryKey});
  const {favorites, setNewData} = useFavorites();

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const renderSpinner = () => {
    return (
      <ActivityIndicator
        animating={true}
        color={tintColor}
        style={{margin: 10}}
      />
    );
  };

  return isPending || !data ? (
    <View style={styles.loaderContainer}>
      <ActivityIndicator
        animating={true}
        style={styles.loaderContainer}
        color={tintColor}
      />
    </View>
  ) : error ? (
    <View style={styles.loaderContainer}>
      <Text>{error.message}</Text>
    </View>
  ) : (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={data?.pages.flat()}
          renderItem={({item, index}) => {
            return (
              <Character
                characterInfo={item}
                index={index}
                navigation={navigation}
                isFavorite={favorites ? favorites.includes(index) : false}
                setNewData={setNewData}
              />
            );
          }}
          keyExtractor={(item, index) => `${index}`}
          onEndReached={loadMore}
          onEndReachedThreshold={1}
          maxToRenderPerBatch={5}
          ListFooterComponent={isFetchingNextPage ? renderSpinner : null}
        />
      </View>
    </SafeAreaView>
  );
}

export default Characters;
