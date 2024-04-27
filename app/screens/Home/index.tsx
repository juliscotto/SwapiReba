/* eslint-disable max-statements */
import React from 'react';
import {NativeStackScreenProps, RootStackParamList} from '../../../App';
import {FlatList, SafeAreaView, View} from 'react-native';
import styles from './styles';
import AttributeItem from '../../components/AttributeItem';
import {backgroundColor} from '../../theme/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function Home({navigation}: Props) {
  const dataOptions = [
    {
      attributeName: 'people',
      title: 'Personajes',
      navigate: () => navigation.navigate('Characters', {queryKey: 'people'}),
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={dataOptions}
          renderItem={({item}) => (
            <AttributeItem title={item.title} onItemPressed={item.navigate} />
          )}
          keyExtractor={item => item.title}
          contentContainerStyle={{backgroundColor: backgroundColor}}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;
