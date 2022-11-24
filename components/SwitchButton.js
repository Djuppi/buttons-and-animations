import { ButtonContainer } from "./ButtonContainer";
import styles from '../styles/SwitchButton.module.css';

export const SwitchButton = () => {

    return (
        <ButtonContainer>
            <p>Switch Button</p>
            <a className={styles.button} href="#">Hover me</a>
        </ButtonContainer>
    )
}