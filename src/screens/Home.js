import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { Header  } from '../Components/Header';
import { Footer  } from '../Components/Footer';

export default function Home({navigation,GlobalState}){
    const { toDoList, setToDoList, Task, setTask, setChosenTask } = GlobalState;

    useEffect(() => {
        setToDoList (prevState => [...prevState, {id: 2, Task: 'ir para a cama'}])
    }, [])

    const handleSaveTask = () = {
        const index = toDoList.lenght + 1;

        setToDoList(prevState => [...prevState, {id: index, task: task}])

        setTask('');
    }

    const handleChooseTask(item) {
        setChosenTask(item);
        navigation.navigate('ChosenTask');
    }

    return(
        <View style = {styles.screen}>
            <Header />
            <View style = {styles.body}>
            
            </View>
            <Footer navigation = {navigation} />

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',    
        alignItems: 'center',
        justifyContent: 'center',
    },
    Header:  {
        flex: 1
        width: '100%',
        backgroundColor: 'red'
    },
    body:  {
        flex: 8
        width: '100%',
        backgroundColor: 'blue'
    },
    Footer:  {
        flex: 1
        width: '100%',
        backgroundColor: 'yellow'
    },

})