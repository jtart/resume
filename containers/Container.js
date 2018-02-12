import { rehydrate } from 'glamor'
import glamorous from 'glamorous'

if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

const Container = ({ children }) => {
  const styles = {
    maxWidth: '1280px',
    margin: '0 auto'
  }

  const StyledContainer = glamorous.div(styles)

  return(
    <StyledContainer>
      { children }
    </StyledContainer>
  )
}

export {
  Container
}