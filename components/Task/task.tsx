import React from 'react'

import { View, Text, TouchableOpacity,  } from 'react-native'

import {styles} from "./styles"


type TaskProps = {
  text: string,

}

export const Task: React.FC<TaskProps> = ({text}) => {
  return(
    <View style={styles.item}>
      <View style={styles.itemLeft}>
      <View style={styles.square}></View>
      <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}


