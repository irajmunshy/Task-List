import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './component/Task/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleAddTask = () => {
    setCounter(counter + 1);
    const taskInfo = {
      taskName: task,
      key: counter,
    }
    setTaskItems([...taskItems, taskInfo]);
    setTask(null);
  }

  const handleDeleteTask = (key) => {
    setCounter(counter - 1);
    const filterTaskItems = taskItems.filter(task => task.key !== key);
    setTaskItems(filterTaskItems);
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskPart}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Today's Tasks</Text>
          <Text style={styles.counter}>Counter: {counter}</Text>
        </View>

        <View style={styles.taskList}>
          {
            taskItems.map( eachTask => 
              <Task 
                task={eachTask}
                handleDeleteTask={handleDeleteTask}
                key={eachTask.key}
              ></Task>
            )
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
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },  
  taskPart: {
    paddingTop: 80,
    paddingHorizontal: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 80,
  },
  counter: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingRight: 40,
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