import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

const Button = ({title, onPress}) => {
    return (
        <TouchableHighlight style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button : {
        backgroundColor : 'blue',
        borderRadius : 10,
        paddingVertical : 15,
        paddingHorizontal:5,
        alignItems:'center'
    },
    buttonText : {
        color : 'white'
    }
})

export default Button
