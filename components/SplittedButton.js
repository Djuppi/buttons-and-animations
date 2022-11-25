import { ButtonContainer } from "./ButtonContainer";
import styles from '../styles/SplittedButton.module.css';

export const SplittedButton = () => {

    return (
        <ButtonContainer>
            <p>Splitted Button</p>
            <a className={styles.button} href="#"><span>Hover me</span></a>
        </ButtonContainer>
    )
}