import { ButtonContainer } from "./ButtonContainer";
import styles from '../styles/FlipSwipeButton.module.css';

export const FlipSwipeButton = () => {

    return (
        <ButtonContainer>
            <p>Flip Swipe Button</p>
            <a className={styles.button} href="#">Button</a>
        </ButtonContainer>
    )
}