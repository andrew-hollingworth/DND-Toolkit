import React from 'react';
import Conditions from './Conditions'
import Rest from './Rest'

const Mechanics = (props) => {
  return (
    <>
      <h1 className='eaves'>Game Mechanics</h1>
      <Conditions
        setConditionModule={props.setConditionModule}
        conditionModule={props.conditionModule}
        handleUpdateScreen={props.handleUpdateScreen}
        batchScreen={props.batchScreen} />
      <br></br>
      <Rest
        restModule={props.restModule}
        setRestModule={props.setRestModule}
        handleUpdateScreen={props.handleUpdateScreen}
        batchScreen={props.batchScreen} />
    </>
  )
}

export default Mechanics
