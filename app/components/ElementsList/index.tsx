import React, {ReactNode, useState} from 'react';
import {Text, TouchableHighlight, View, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title: string;
  elementContent: ReactNode;
}

function ElementsList({title, elementContent}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navigation = useNavigation();

  console.log('navigation', navigation);
  const handleOpenFilm = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <View>
      <TouchableHighlight onPress={() => handleOpenFilm()}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Icon
            name={isCollapsed ? 'chevron-back-outline' : 'chevron-down-outline'}
            type="ionicon"
            color="#887700"
            size={20}
            style={{alignSelf: 'center'}}
          />
        </View>
      </TouchableHighlight>
      {!isCollapsed ? <ScrollView>{elementContent}</ScrollView> : null}
    </View>
  );
}

export default ElementsList;
