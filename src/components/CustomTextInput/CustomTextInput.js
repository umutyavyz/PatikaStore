import React from "react";
import { TextInput,StyleSheet,View, Keyboard } from "react-native";
import styles from './CustomTextInput.style'

const CustomTextInput = ({placeholder,value,onChangeText,secureTextEntry = false, keyboardType = 'default'}) => {
    return(
        <View style={StyleSheet.inputContainer}>
            <TextInput style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}>
            </TextInput>
        </View>
    )
}

export default CustomTextInput;