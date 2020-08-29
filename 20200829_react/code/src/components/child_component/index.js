import React, { useEffect } from "react"
import GrandchildComponent from "../grandchild_component"

import "./index.css"

const ChildComponent = ({ onSay, name = "", grandchildName = "" }) => {
  const clickBtnHandler = () => {
    const msg = `message from ${name}`
    console.log("click ", msg)
    onSay && onSay(msg)
  }

  return (
    <section className="child-component">
      <div>child-component[名字:{name}]</div>
      <div>
        <button onClick={clickBtnHandler}>say</button>
        <GrandchildComponent
          name={grandchildName}
          onSay={(grandMsg) => {
            onSay && onSay(grandMsg)
          }}
        />
      </div>
    </section>
  )
}

export default ChildComponent
