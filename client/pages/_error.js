import React from 'react';
import { Layout } from '../containers/Layout'
import { withPageData } from "../components/PageWrapper"

class Error extends React.Component {
  static async getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 'An error occurred. Please go back.';
    return { statusCode }
  }

  render() {
    const { statusCode, navData } = this.props
    return (
      <Layout title={statusCode} navData={navData}>
        <h1>{statusCode}</h1>
      </Layout>
    )
  }
}

export default withPageData(Error)