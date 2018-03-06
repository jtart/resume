import React from 'react'
import Head from 'next/head'

import { Container } from './Container'
import { Main } from './Main'

import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'

import { initGA, logPageView } from '../utils/analytics'

class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render () {
    const { children, title } = this.props;

    return (
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
  }
}

export {
  Layout
}