import styles from './heading.module.css'
function Heading({ items }) {
  // const items = props.items

  console.log(items)

    return (
      <div>
      <h2 className={styles.heading}>Some heading</h2>
      </div>
    )
  }

  export default Heading