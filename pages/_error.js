import React from 'react';
import { Layout } from '../containers/Layout'

const errorData = (statusCode) => (
  <p>
    { statusCode ?
      statusCode.toString()
    : 
      'An error occurred on the client.'
    }
  </p>
)

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    const { statusCode } = this.props
    return (
      <Layout title={statusCode}>
        { errorData(statusCode) }
      </Layout>
    )
  }
}