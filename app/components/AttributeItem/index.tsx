import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import styles from './styles';

type AttributeItemProps = {title: string; onItemPressed: () => void};

function AttributeItem({title, onItemPressed}: AttributeItemProps) {
  return (
    <TouchableHighlight style={styles.item} onPress={onItemPressed}>
      <Text style={styles.title}>{title}</Text>
    </TouchableHighlight>
  );
}

export default AttributeItem;
