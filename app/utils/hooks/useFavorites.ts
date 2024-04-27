import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITE_CHARACTERS_STORAGE_KEY = 'favoriteCharacters';
export const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem(
          FAVORITE_CHARACTERS_STORAGE_KEY,
        );
        if (value) setFavorites(JSON.parse(value));
      } catch (error) {
        console.error('useAsyncStorage getItem error:', error);
      }
    })();
  }, []);

  const setNewData = async (value: number) => {
    try {
      const newFavorite = favorites ? [...favorites] : [];
      if (newFavorite.includes(value)) {
        const index = newFavorite.indexOf(value);
        newFavorite.splice(index, 1); // 2nd parameter means remove one item only
      } else {
        newFavorite.push(value);
      }
      await AsyncStorage.setItem(
        FAVORITE_CHARACTERS_STORAGE_KEY,
        JSON.stringify(newFavorite),
      );
      setFavorites(newFavorite);
    } catch (error) {
      console.error('useAsyncStorage setItem error:', error);
    }
  };

  return {setNewData, favorites};
};
