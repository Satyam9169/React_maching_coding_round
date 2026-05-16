import React from 'react'

export const App = (props) => {
  return (
    <div>
      Name: {props.name} <br />
      Age : {props.age} <br />
      Section : {props.section}
    </div>
  )
}

const FirstApp = () => {
  return (
    <div>
      <App name={"satyam"} age={25} section={"First"} />
    </div>
  )
}

export default FirstApp