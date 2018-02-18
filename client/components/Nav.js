import { rehydrate } from 'glamor'
import glamorous from 'glamorous'

import Link from "./Link"

if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

const StyledNav = glamorous.nav({
  textAlign: 'center',
  paddingBottom: '32px',
  marginBottom: '60px',
  fontSize: '16px',
  textTransform: 'uppercase',
  '& li': {
    display: 'inline-block',
    padding: '0 20px'
  }
})

const StyledUl = glamorous.ul({
  'margin': '0',
  'padding': '0'
})

const getSlug = url => {
  const parts = url.split("/")
  return parts.length > 2 ? parts[parts.length - 2] : ""
}

const navItems = (data) => {
  return data.map((item, index) => {
    const slug = getSlug(item.url);
    const visibleLink = slug === 'index' ? '' : slug
    return (
      <li key={item.ID}><Link as={`/${visibleLink}`} href={`/${slug}`} text={item.title}/></li>
    );
  });
}

const Nav = ({ data }) => {
  if(!data) return null
  return (
    <StyledNav>
      <StyledUl>
        { navItems(data) }
      </StyledUl>
    </StyledNav>
  )
}

export {
  Nav
}