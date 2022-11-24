import React from 'react'
import { ButtonContainer } from './ButtonContainer';
import styles from '../styles/TiltedButton.module.css';

export default function TiltedButton() {
  return (
    <ButtonContainer>
        <p>Tilted swipe Button</p>
        <a className={styles.button} href="#">Hover me</a>
    </ButtonContainer>
  )
}
