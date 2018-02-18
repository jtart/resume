import { Layout } from '../containers/Layout'
import { Resume as ResumeComp } from '../components/Resume'
import { withPageData } from "../components/PageWrapper"
import { withData } from '../components/Resume/hoc'

const Resume = props => {
  const ConnectedResume = withData(ResumeComp)
  return(
    <Layout title='Resume' navData={props.navData}>
      <ConnectedResume />
    </Layout>
  )
}

export default withPageData(Resume)