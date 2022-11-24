import React from 'react'
import { ButtonContainer } from './ButtonContainer';
import styles from '../styles/YeahButton.module.css';


export default function YeahButton() {
  return (
    <ButtonContainer>
        <p>YeahButton</p>
        <a className={styles.button} href="#">Hover me</a>
    </ButtonContainer>
  )
}
