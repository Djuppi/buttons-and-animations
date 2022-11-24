import styles from '../styles/ButtonContainer.module.css';

export const ButtonContainer = ({children}) => {

    return (

        <section className={styles.buttonContainer}>
            {children}
        </section>
    )
}