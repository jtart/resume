import React from 'react'
import Link from 'next/link'
import { rehydrate } from 'glamor'
import glamorous from 'glamorous'

if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.headerStyles = {
      letterSpacing: '4px',
      textTransform: 'uppercase',
      textAlign: 'center'
    }

    this.mastheadStyles = {
      margin: '60px'
    }

    this.mastheadTitleStyles = {
      fontSize: '60px'
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const StyledHeader = glamorous.header(this.headerStyles)
    const StyledMasthead = glamorous.div(this.mastheadStyles)
    const StyledMastheadTitle = glamorous.h1(this.mastheadTitleStyles)

    return (
      <StyledHeader>
        <StyledMasthead>
          <StyledMastheadTitle><Link href='/'><a>JRDN</a></Link></StyledMastheadTitle>
        </StyledMasthead>
      </StyledHeader>
    )
  }
}

export {
  Header
}