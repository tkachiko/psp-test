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
                                            }) => {
  return (
    <TouchableOpacity>
      <Text style={{
        borderWidth,
        borderRadius,
        borderColor,
        color,
        paddingHorizontal,
        paddingVertical,
        textAlign,
        fontSize,
        backgroundColor,
        fontWeight,
      }}
            onPress={onPress}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}