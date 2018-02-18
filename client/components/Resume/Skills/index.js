import React from 'react';
import { rehydrate } from 'glamor'
import glamorous from 'glamorous'

import { Grid } from '../../../containers/Grid'
import { SkillItem } from './Item'

if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

const styles = {
  textAlign: 'center'
}

class SkillsComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
  }

  componentWillMount() {
    const items = this.dataToItems()
    this.setState({ items: items })
  }

  dataToItems() {
    const { data } = this.props
    const items = []

    for (const itemKey in data) {
      const itemData = data[itemKey];
      const key = itemKey.toString()
      items.push(<SkillItem key={key} itemKey={itemKey} data={itemData} />)
    }

    return items;
  }

  render () {
    const StylesSkills = glamorous.div(styles)
    return (
	    <StylesSkills>
	      <h2>Skills</h2>
        <Grid>
          { this.state.items }
        </Grid>
	    </StylesSkills>
    )
  }
}

export {
  SkillsComponent
}