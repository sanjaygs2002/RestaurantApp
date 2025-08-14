import React from 'react'

function ChildComponent(onChildClick) {
  return (
    <>
     <button onClick={onChildClick}>Click Me</button>
    </>
  )
}

export default ChildComponent;