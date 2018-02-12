import React from 'react'
import { rehydrate } from 'glamor'
import glamorous from 'glamorous'

if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

const styles = {
  fontSize: '16px',
  marginBottom: '60px',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  textAlign: 'center'
}

class Footer extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const StyledFooter = glamorous.footer(styles)

    return (
      <StyledFooter>
        <p className={styles.footerInfo}>This magic web thing was made with Universal React. Check out da <a href='https://github.com/jtart/resume'>source code</a>!</p>
      </StyledFooter>
    )
  }
}

export {
  Footer
}