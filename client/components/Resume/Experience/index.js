import React from 'react';
import { ExperienceItem } from './Item'

class ExperienceComponent extends React.Component {
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

    for (let i = 0; i < data.length; i++) {
      const itemData = data[i]
      const key = `experience__item-${i}`
      items.push(<ExperienceItem key={key} {...itemData} />)
    }

    return items;
  }

  render () {
    return (
	    <div>
	      <h2>Experience</h2>
          { this.state.items }
	    </div>
    )
  }
}

export {
  ExperienceComponent
}