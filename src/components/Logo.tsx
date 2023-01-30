import React, {FC} from 'react'
import {Image} from 'react-native'

type PropsType = {
  width: number
  height: number
  marginBottom: number
}

export const Logo: FC<PropsType> = ({width, height, marginBottom}) => {
  return (
    <Image source={require('../res/images/logo.png')} style = {{ width, height, marginBottom }} />
  )
}