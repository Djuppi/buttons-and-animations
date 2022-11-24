import React from 'react'
import { ButtonContainer } from './ButtonContainer';
import styles from '../styles/StretchButton.module.css';

export default function StretchButton() {
  return (
    <ButtonContainer>
        <p>Stretch Button</p>
        <a className={styles.button} href="#">Button</a>
    </ButtonContainer>
  )
}
