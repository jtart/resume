import { rehydrate, css } from 'glamor'
import glamorous from 'glamorous'

if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

const Main = ({ children }) => {
  css.global('*', {
    fontFamily: "'Open Sans', sans-serif",
    color: '#515151'
  })

  css.global('h1, h2', {
    color: '#EB1313',
    textAlign: 'center'
  })

  css.global('h1, h2, h3, h4, h5', {
    textTransform: 'uppercase'
  })

  css.global('a', {
    textDecoration: 'none',
    color: '#EB1313',
    '&:hover': {
      textDecoration: 'underline'
    }
  })

  const styles = {
    marginBottom: '320px',
    letterSpacing: '1px',
    '& > div': {
      marginBottom: '60px'
    }
  }

  const StyledMain = glamorous.div(styles)

  return (
    <StyledMain role="main">
      { children }
    </StyledMain>
  )
}

export {
  Main
}