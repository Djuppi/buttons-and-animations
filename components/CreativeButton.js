import { ButtonContainer } from "./ButtonContainer";
import styles from '../styles/CreatvieButton.module.css';

export const CreatvieButton = () => {

    return (
        <ButtonContainer>
            <p>Creatvie Button</p>
            <a className={styles.button} href="#">Button hover effect</a>
        </ButtonContainer>
    )
}