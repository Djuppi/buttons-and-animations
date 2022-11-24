import Head from 'next/head'
import Image from 'next/image'
import { Button1 } from '../components/Button1'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Button1 />
    </div>
  )
}
