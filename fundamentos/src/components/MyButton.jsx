import styles from './MyButton.module.css'

export function  MyButton({text, func}) {
// Las props que recibe este componente son texto y función
    return (
        <button className={styles.button} onClick={func}> {text || "soy un botón"} </button>
    )
} 



