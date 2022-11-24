import Head from 'next/head'
import Image from 'next/image'
import { ThreeDotsButton } from '../components/3DotsButton'
import { Button1 } from '../components/Button1'
import { CircularSwipeButton } from '../components/CircularSwipeButton'
import { FlagButton } from '../components/FlagButton'
import { FlippingButton } from '../components/FlippinButton'
import { FlipSwipeButton } from '../components/FlipSwipeButton'
import { FlyinButton } from '../components/FlyInButton'
import StretchButton from '../components/StretchButton'
import { SwipeButton } from '../components/SwipeButton'
import { SwitchButton } from '../components/SwitchButton'
import TiltedButton from '../components/TiltedButton'
import YeahButton from '../components/YeahButton'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Button1 />
      <SwipeButton />
      <FlagButton />
      <StretchButton />
      <YeahButton />
      <TiltedButton />
      <SwitchButton />
      <FlyinButton />
      <CircularSwipeButton />
      <FlippingButton />
      <FlipSwipeButton />
      <ThreeDotsButton />
    </div>
  )
}
