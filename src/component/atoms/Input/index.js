import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const Input = ({placeholder, ...rest}) => {
    return (
        <TextInput 
            style={styles.input}
            placeholder={placeholder}
            {...rest}

        />
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 18,
        fontSize: 14,
        color: 'blue'
    }
});

export default Input
