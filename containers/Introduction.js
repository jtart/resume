import { rehydrate } from 'glamor'
import glamorous from 'glamorous'

if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

const Introduction = ({ children }) => {
  const styles = {
    letterSpacing: '2px',
    fontSize: '20px',
    textAlign: 'center'
  }

  const StyledIntroduction = glamorous.div(styles)

  return (
    <StyledIntroduction>
      { children }
    </StyledIntroduction>
  )
}

export {
  Introduction
}