import styles from "./HangmanDrawing.module.css"

const HEAD = (
    <div className={styles.hangmanHead}/>
)
const BODY = (
    <div className={styles.hangmanBody}/>
)

const RIGHT_ARM = (
    <div className={styles.hangmanRightArm}/>
)

const LEFT_ARM = (
    <div className={styles.hangmanLeftArm}/>
)

const RIGHT_LEG = (
    <div className={styles.hangmanRightLeg}/>
)

const LEFT_LEG = (
    <div className={styles.hangmanLeftLeg}/>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrawing({numberOfGuesses}: HangmanDrawingProps) {
    return <div className={styles.hangmanContainer}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div className={styles.hangmanRight}/>
        <div className={styles.hangmanRope}/>
        <div className={styles.hangmanUp}/>
        <div className={styles.hangmanBottom}/>
    </div>
}