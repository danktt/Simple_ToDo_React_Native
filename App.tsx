import React, { ReactChild, ReactNode, ReactText, useState } from 'react';
import {  Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Task } from './components/Task/task';
import { styles } from './styles/appstyles';
 

type Props = {
  text: string;
  value: string;
  onChangeText: (text: string) => void;
  index: number;
}

export default function App(props: Props) {

  const [ task, setTask] = useState<string>();

  const [taskItems, setTaskItems] = useState([]);
  
  const handleAddTask = () =>{
    Keyboard.dismiss();
    setTaskItems([...taskItems,task]);
    setTask(null);
  }

  const completeTask = (index: number) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      
      {/* Today Task */}
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Today Task 🤓 </Text>

          <View style={styles.items}>
            {/* This is whera the task will go!!  */}
            {
              taskItems.map((item, index) => {
               return (
                 <TouchableOpacity key={index} onPress={()=> completeTask(index)}>
                   <Task text={item} />

                 </TouchableOpacity>
               )
               
              })
            }
            

           </View>
        </View>

        {/* Write a  task  */}

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding": "height" }
            style={styles.writeTaskWrapper}
            >
              <TextInput 
                style={styles.input} 
                placeholder={'Write a task'} 
                value={task} 
                onChangeText={(text) =>setTask(text)}
              />

              <TouchableOpacity onPress={()=> handleAddTask()}>
                <View style={styles.addWrapper}>
                  <Text style={styles.addText}>+</Text>
                </View>
              </TouchableOpacity>
            </KeyboardAvoidingView>


    </View>
  );
}

