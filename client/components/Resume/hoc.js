import React from 'react';

import { data } from '../../static/resume.json';

const withData = (Component) => (
  class extends React.Component {
    constructor(props) {
      super(props)
    }

    componentWillMount() {
      this.setState(data)
    }

    render() {
      return (
        <Component { ...this.state } />
      )
    }
  }
)

// const withData = (Component) => class extends React.Component {
//   static getInitialProps(ctx) {
//     return Component.getInitialProps(ctx)
//   }

//   render() {
//     return(
//       <Component { ...this.props } /> 
//     )
//   }
// }

export {
  withData
}