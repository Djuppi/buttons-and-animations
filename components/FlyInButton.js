import { ButtonContainer } from "./ButtonContainer";
import styles from '../styles/FlyinButton.module.css';

export const FlyinButton = () => {

    return (
        <ButtonContainer>
            <p>Flyin Button</p>
            <a className={styles.button} href="#">Hover me</a>
        </ButtonContainer>
    )
}