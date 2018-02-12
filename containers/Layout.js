import Head from 'next/head'

import { Container } from './Container'
import { Main } from './Main'

import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'

const Layout = ({ children, title = null }) => (
  <Container>
    <Head>
      <title key='title'>{ title ? `${title} - JRDN` : `JRDN` }</title>
    </Head>
    <Header key='header' />
    <Nav key='nav' />
    <Main key={title}>
      { children }
    </Main>
    <Footer key='footer' />
  </Container>
)

export {
  Layout
}