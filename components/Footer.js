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

const contactStyles = {
  'padding': '0',
  'margin': '0',
  '& li': {
    display: 'inline-block',
    padding: '0 12px'
  }
}

class Footer extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const StyledFooter = glamorous.footer(styles)
    const StyledContact = glamorous.ul(contactStyles)

    return (
      <StyledFooter>
        <p>This magic web thing was made with Universal React. Check out da <a href='https://github.com/jtart/resume'>source code</a>!</p>
        <p>Wanna chat?</p>
        <StyledContact>
          <li><a href="mailto:jordan.tart3@gmail.com">Mail</a></li>
          <li><a href="https://linkedin.com/in/jordan-tart-8b517950/">Linkedin</a></li>
        </StyledContact>
      </StyledFooter>
    )
  }
}

export {
  Footer
}