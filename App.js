import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './component/Task/Task';

export default function App() {

  const [task, setTask] = useState();

  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskPart}>
        <Text style={styles.title}>Today's Tasks</Text>
        <View style={styles.taskList}>
          {
            taskItems.map( eachTask => <Task text={eachTask}></Task>)
          }
        </View>
      </View>

    <KeyboardAvoidingView
    behavior={Platform.OS === "android" ? "padding" : "height"}
    style={styles.writeATaskBox}>
      <TextInput style={styles.input} placeholder={'Write A Task'} onChangeText={text => setTask(text)} value={task}></TextInput>
      <TouchableOpacity onPress={ () => handleAddTask()}>
        <View style={styles.addBtn}>
          <Text style={styles.addTask}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7ea6e6',
  },
  taskPart: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  taskList: {
    marginTop: 30
  },
  writeATaskBox: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 60,
    width: 250
  },
  addBtn: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTask: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 3
  }
});
