import React, {FC, memo, useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Controller, useForm} from "react-hook-form";
import {SelectDropdown, DropdownData} from "expo-select-dropdown";



interface IInputCity {
    textName?: string
    controllerName: string
}

export const InputCity: FC<IInputCity> = memo(({textName, controllerName}) => {
    const [selected, setSelected] = useState<DropdownData<string, string> | null>(null);
    const [data] = useState([
        {key: "1", value: "Toothbrush"},
        {key: "2", value: "Laptop"},
        {key: "3", value: "Sunglasses"},
        {key: "4", value: "Baseball"},
        {key: "5", value: "Scissors"},
        {key: "6", value: "Bicycle"},
        {key: "7", value: "Camera"},
        {key: "8", value: "Umbrella"},
        {key: "9", value: "Backpack"},
        {key: "10", value: "Water bottle"}
    ]);


    const {
        control,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm({mode: 'onBlur'})

    return (
        <View style={styleInputCity.inputContainer}>
            <Text style={styleInputCity.text}>Город</Text>
                    {/*<SelectDropdown*/}
                    {/*data={data}*/}
                    {/*placeholder={"Select option"}*/}
                    {/*selected={selected}*/}
                    {/*setSelected={setSelected}*/}
                    {/*searchOptions={{cursorColor: "#007bff"}}*/}
                    {/*searchBoxStyles={{borderColor: "#007bff"}}*/}
                    {/*dropdownStyles={{borderColor: "#007bff"}}*/}
                    {/*/>*/}
        </View>
    );
});

const styleInputCity = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
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
        padding: 14,
    },
})



