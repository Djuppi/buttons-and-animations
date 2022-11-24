import { ButtonContainer } from "./ButtonContainer";
import styles from '../styles/FlippingButton.module.css';

export const FlippingButton = () => {

    return (
        <ButtonContainer>
            <p>Flipping Button</p>
            <a className={styles.button} href="#">Button</a>
        </ButtonContainer>
    )
}