import React from 'react'

const Condition = ({test=true, success=<></>, fail=<></>}) => {
  return (
    test ? success : fail
  )
}

export default Condition