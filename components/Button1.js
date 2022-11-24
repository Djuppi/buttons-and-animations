import styles from '../styles/Button1.module.css';
import { ButtonContainer } from './ButtonContainer';

export const Button1 = () => {

    return (
        <ButtonContainer>
            <p>Rotate button</p>
            <a className={styles.button} href='#'>Hover me</a>
        </ButtonContainer>
    )
}