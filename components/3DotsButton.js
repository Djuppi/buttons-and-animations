import styles from '../styles/ThreeDotsButton.module.css';
import { ButtonContainer } from './ButtonContainer';

export const ThreeDotsButton = () => {

    return (
        <ButtonContainer>
            <p>Three Dots Button</p>
            <a className={styles.button} href="#"><span></span>hover me</a>
        </ButtonContainer>
    )
}