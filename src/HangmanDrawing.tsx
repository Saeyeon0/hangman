import styles from "./HangmanDrawing.module.css"

const HEAD = (
    <div className={styles.hangmanHead}/>
)
const BODY = (
    <div className={styles.hangmanBody}/>
)

export function HangmanDrawing() {
    return <div className={styles.hangmanContainer}>
        {HEAD}
        {BODY}
        <div className={styles.hangmanRight}/>
        <div className={styles.hangmanRope}/>
        <div className={styles.hangmanUp}/>
        <div className={styles.hangmanBottom}/>
    </div>
}