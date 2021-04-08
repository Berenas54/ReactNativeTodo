import React, {useState} from "react";
import {Button, StyleSheet, TextInput, View, Alert} from "react-native";

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState("")
    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert("The title of the case cannot be empty.")
        }
    }
    return (
        <View style={styles.block}>
            <TextInput onChangeText={setValue} value={value} placeholder={"Enter name"} style={styles.input}
                       autoCorrect={false} autoCapitalize={'none'}/>
            <Button onPress={pressHandler} title='Add'/>
        </View>)
}

const styles = StyleSheet.create({
        block: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10
        },
        input: {
            width: '70%',
            padding: 10,
            borderStyle: 'solid',
            borderBottomWidth: 2,
            borderBottomColor: '#3949ab'
        }
    }
)