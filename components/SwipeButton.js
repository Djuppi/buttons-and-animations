import styles from '../styles/SwipeButton.module.css';
import { ButtonContainer } from './ButtonContainer';

export const SwipeButton = () => {

    return (
        <ButtonContainer>
            <p>SwipeButton</p>
            <a className={styles.button} href='#'>Hover me</a>
        </ButtonContainer>
    )
}