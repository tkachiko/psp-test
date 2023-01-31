import React, {FC} from 'react';
import {Text, View, StyleSheet, TextInput} from "react-native";
import {Controller, useForm} from "react-hook-form";
import {styles} from "../screens/register/RegisterScreen";
import MaskInput, {Masks} from 'react-native-mask-input';


interface InputRegisterType {
    mask?: string
    placeHolderName?: string
    controllerName: string

}

export const InputPhoneNumber: FC<InputRegisterType> = ({placeHolderName, controllerName, mask}) => {
    const [creditCard, setCreditCard] = React.useState('');

    const {
        control,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm({mode: 'onBlur'})

    const onSubmit = (data: any) => console.log(data)

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.text}>Телефон</Text>

            <Controller
                name={controllerName}
                rules={{
                    required: {
                        value: true,
                        message: 'Field is required!',
                    }
                }}
                control={control}
                render={({field}) => <MaskInput
                    value={creditCard}
                    onChangeText={setCreditCard}
                    mask={Masks.USA_PHONE}
                />}
            />


        </View>
    );
};

const inputPhoneStyle = StyleSheet.create({
    maskedInput: {
        borderWidth: 2,
        borderRadius: 6,
        width: '80%',
        padding: 12,
        color: 'black',
        fontSize: 20
    }
})