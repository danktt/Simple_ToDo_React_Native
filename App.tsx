import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Task } from './components/Task/task';




export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Today Task */}
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Today Task</Text>

          <View style={styles.items}>
            {/* This is whera the task will go!!  */}
            <Task text={"Test"} />
            <Task text={"eae"} />
            <Task text={"Ola"} />
            
            
            
          </View>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f0f0',
    
  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize:25,
    fontWeight: 'bold',
  },
  items:{
    marginTop: 30,
  },
});
