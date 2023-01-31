import React, {FC, memo} from 'react'
import {StyleSheet, Text, TextInput, View} from 'react-native'
import * as DocumentPicker from 'expo-document-picker'

interface AddFileType {
    textName: string
    placeHolderName?: string
    controllerName?: string
    placeholderTextColor?: string
}

export const AddFile: FC<AddFileType> = memo(({placeHolderName, textName, placeholderTextColor}) => {

    const selectDoc = async () => {
        try {
            const res = await DocumentPicker.getDocumentAsync({})
            console.log(res)
        } catch (err) {
            console.log('err', err)
        }
    }
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.text}>{textName}</Text>
            <TextInput onPressIn={selectDoc} style={styles.input} placeholderTextColor={placeholderTextColor} placeholder={placeHolderName}/>
        </View>
    );
});

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 343,
        paddingVertical: 8
    },
    text: {
        fontSize: 12,
        fontWeight: '600',
        flexWrap: 'wrap'
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        width: 263,
        height: 48,
        borderColor: '#1E63EE',
        borderStyle: 'dashed',
        padding: 14,
    },
})
