import type { NextPage } from 'next'
import Head from 'next/head'
import Content from '../src/components/Content'
import Footer from '../src/components/Footer'
import SideBarMenu from '../src/components/SideBarMenu'
import { SideBarMenuCard, SideBarMenuItem } from '../src/types/types'
import { FcAdvertising, FcAcceptDatabase } from 'react-icons/fc'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const items: SideBarMenuItem[] = [{
      id: '1',
      label: 'Hola',
      icon: FcAdvertising,
      url: "/",
    }, {
      id: '2',
      label: 'Q',
      icon: FcAcceptDatabase,
      url: "/",
    },
  ];

  const card: SideBarMenuCard = {
    id:'card_01',
    displayName: 'Juan Lechin',
    title: 'Accountant',
    photoUrl: 'https://res.cloudinary.com/drqezhb6l/image/upload/v1623218040/christopher-campbell-rDEOVtE7vOs-unsplash_kzmlib.jpg',
    url: "/"
  };

  return (
    <>
      <Head>
        <title>Next</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBarMenu items={items} card={card} />
      <div className={styles.container}>
        <Content />
      </div>
      <Footer />
    </>
  )
}

export default Home
