
import { CircularText as ciText } from '@webpunk/circular-text/src/circular-text';

import React from 'react'

const CircularText = ({colon, radius}) => {
  return (
    <ciText text={colon} radius={radius}/>
  )
}

export default CircularText;