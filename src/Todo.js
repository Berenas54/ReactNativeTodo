import React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";

export const Todo = ({todo, onRemove}) => {
    return (<TouchableOpacity onPress={() => {
        }} onLongPress={() => onRemove(todo.id)}>
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
        todo: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 15,
            borderWidth: 1,
            borderColor: '#eee',
            borderRadius: 5,
            marginBottom: 10

        }
    }
)