import React from 'react'
import { getMenu } from '../lib/wordpress'

const withPageData = Component => (
  class extends React.Component {
    static async getInitialProps(context) {
      const compProps = Component.getInitialProps ? await Component.getInitialProps(context) : null
      const { items } = await getMenu()

      return { ...compProps, navData: items }
    }

    render() {
      return (
        <Component {...this.props} />
      )
    }
  }
)

export {
  withPageData
}