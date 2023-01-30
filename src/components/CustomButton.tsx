import React, {FC} from 'react'
import {Text, TouchableOpacity} from 'react-native'

type PropsType = {
  borderWidth: number
  borderRadius: number
  paddingVertical: number
  paddingHorizontal: number
  borderColor: string
  fontSize: number
  color: string
  textAlign: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined
}

export const CustomButton: FC<PropsType> = ({
                                        borderWidth,
                                        borderRadius,
                                        borderColor,
                                        color,
                                        paddingHorizontal,
                                        paddingVertical,
                                        textAlign,
                                        fontSize,
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
      }}>
        Врач
      </Text>
    </TouchableOpacity>
  )
}