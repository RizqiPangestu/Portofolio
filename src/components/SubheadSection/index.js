import React from 'react'

import { SubheadContainer, SubheadWrapper, SubheadText } from './SubheadElementes'

const SubheadSection = ({id,text}) => {
  return (
    <div>      
      <SubheadContainer id={id}>
        <SubheadWrapper>
          <SubheadText>
            {text}
          </SubheadText>
        </SubheadWrapper>
      </SubheadContainer>
    </div>
  )
}

export default SubheadSection