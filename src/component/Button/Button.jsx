import React from 'react'
import styles from'./Button.module.css'

console.log(styles)
function Button({
  label = "default",
   id,
  }) {
  // const label = props.label ?? "default"
  // const id = props.id
  
  console.log(label, id)

    return  <button className={styles["my-button"]} id={id}>{label}</button>  
  }
  // Button({
  //   label: "click me",
  //   id: "special"
  // })




  export default Button