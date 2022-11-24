import { ButtonContainer } from "./ButtonContainer";
import styles from '../styles/FlagButton.module.css';

export const FlagButton = () => {

    return (
        <ButtonContainer>
            <p>Flag Button</p>
            <a className={styles.button} href="#">Hover me</a>
        </ButtonContainer>
    )
}