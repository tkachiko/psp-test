import React, {FC} from 'react'
import {Text, TouchableOpacity} from 'react-native'

type PropsType = {
  borderWidth?: number
  borderRadius?: number
  paddingVertical: number
  paddingHorizontal: number
  borderColor?: string
  fontSize: number
  color?: string
  title: string
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | undefined
  backgroundColor?: string
  textAlign: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined
  onPress: () => void
  marginTop?: number
}

export const CustomButton: FC<PropsType> = ({
                                              borderWidth = 2,
                                              borderRadius = 12,
                                              borderColor,
                                              color,
                                              paddingHorizontal,
                                              paddingVertical,
                                              textAlign,
                                              fontSize,
                                              backgroundColor,
                                              fontWeight = '600',
                                              onPress,
                                              title,
                                              marginTop,
                                            }) => {
  return (
    <TouchableOpacity style={{
      backgroundColor,
      borderRadius,
      borderColor,
      borderWidth,
      marginTop,
    }}>
      <Text style={{
        color,
        paddingHorizontal,
        paddingVertical,
        textAlign,
        fontSize,
        fontWeight,
      }}
            onPress={onPress}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}