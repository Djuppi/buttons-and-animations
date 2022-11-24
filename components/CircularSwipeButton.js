import styles from '../styles/CircularSwipeButton.module.css';
import { ButtonContainer } from './ButtonContainer';

export const CircularSwipeButton = () => {

    return (
        <ButtonContainer>
            <p>Circular Swipe Button</p>
            <button className={styles.button}>Button</button>
        </ButtonContainer>
    )
}