import React from "react"

import "./index.css"

const GrandchildComponent = ({ name = "", onSay }) => {
  const msg = `message from ${name}`
  const clickBtnHandler = () => {
    onSay && onSay(msg)
  }
  return (
    <section className="grandchild-component">
      <div>grandchild-component[名字:{name}]</div>
      <div><button onClick={clickBtnHandler}>say</button></div>
    </section>
  )
}

export default GrandchildComponent
