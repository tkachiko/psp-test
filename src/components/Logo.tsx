import React, {FC} from 'react'
import {Image} from 'react-native'

type PropsType = {
  width: number
  height: number
  marginBottom: number
  position?: 'absolute' | 'relative' | undefined
}

export const Logo: FC<PropsType> = ({width, height, marginBottom, position}) => {
  return (
    <Image source={require('../res/images/logo.png')} style={{width, height, marginBottom, position}} />
  )
}