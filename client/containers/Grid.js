import { rehydrate } from 'glamor'
import glamorous from 'glamorous'

if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

const Grid = ({ children }) => {
  const mediaQueries = {
    tablet: '@media all and (min-width: 599px)',
    desktop: '@media all and (min-width: 991px)'
  }

  const styles = {
    display: 'grid',
    gridTemplateColumns: '100%',
    '& *': {
      wordWrap: 'break-word'
    },
    [mediaQueries.tablet]: {
      gridTemplateColumns: '50% 50%',
      '& > *:last-child:nth-last-child(odd)': {
        gridColumn: 'auto / span 2'
      },
      '& > *:first-child:nth-last-child(even), & > *:first-child:nth-last-child(even) ~ * ': {
        gridColumn: 'auto / span 1'
      },
    },
    [mediaQueries.desktop]: {
      gridTemplateColumns: '25% 25% 25% 25%',
      '& > *:last-child:nth-last-child(odd)': {
        gridColumn: 'auto / span 4'
      },
      '& > *:first-child:nth-last-child(even), & > *:first-child:nth-last-child(even) ~ * ': {
        gridColumn: 'auto / span 1'
      }
    }
  }

  const StyledGrid = glamorous.div(styles)

  return(
    <StyledGrid>
      { children }
    </StyledGrid>
  )
}

export {
  Grid
}