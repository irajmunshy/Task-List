import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Task({task, handleDeleteTask}) {
    const {taskName, key} = task;
    
    return (
        <View style={styles.taskBox}>
            <View style={styles.taskLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.taskField}>{taskName}</Text>
            </View>
            <View>
                <Text style={styles.cross} onPress={() => handleDeleteTask(key)}>x</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    taskBox: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    taskLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#0932e6',
        borderRadius: 5,
        marginRight: 15
    },
    taskField: {
        maxWidth: '80%',
        fontSize: 15
    },
    cross: {
        fontSize: 25,
        marginBottom: 5,
        fontWeight: 'bold',
        color: '#0932e6'
    }
});
