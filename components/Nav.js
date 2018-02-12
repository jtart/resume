import Link from 'next/link'
import { rehydrate } from 'glamor'
import glamorous from 'glamorous'

if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

const Nav = () => {
  const styles = {
    textAlign: 'center',
    paddingBottom: '32px',
    marginBottom: '60px',
    fontSize: '16px',
    textTransform: 'uppercase',
    '& li': {
      display: 'inline-block',
      padding: '0 20px'
    }
  }

  const ulStles = {
    'margin': '0',
    'padding': '0'
  }

  const StyledNav = glamorous.nav(styles)
  const StyledUl = glamorous.ul(ulStles)

  return(
    <StyledNav>
      <StyledUl>
        <li><Link href='/'><a>Home</a></Link></li>
        <li><Link href='/resume'><a>Resume</a></Link></li>
      </StyledUl>
    </StyledNav>
  )
}

export {
  Nav
}