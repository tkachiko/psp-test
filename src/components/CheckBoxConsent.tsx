import React, {FC, memo, useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import CheckBox from "expo-checkbox";

interface ICheckBoxConsent {
    textConsent: string
}

export const CheckBoxConsent: FC<ICheckBoxConsent> = memo(({textConsent}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    return (
        <View style={styles.inputContainer}>
            <CheckBox
                color={toggleCheckBox ? '#00C56D' : undefined}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={styles.textConsent}>{textConsent}</Text>
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
  textConsent: {
    fontSize: 13,
    fontWeight: '600',
    flexWrap: 'wrap',
    color: '#1E63EE'
  },
})