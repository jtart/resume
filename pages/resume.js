import { Layout } from '../containers/Layout'
import { Resume } from '../components/Resume'
import { withData } from '../components/Resume/hoc'

export default () => {
  const ConnectedResume = withData(Resume)
  return(
    <Layout title='Resume'>
      <ConnectedResume />
    </Layout>
  )
}