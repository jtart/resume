import { Layout } from '../containers/Layout'
import { Index as IndexComp } from '../components/Index'
import { withPageData } from "../components/PageWrapper"

const Index = props => (
  <Layout title='Home' navData={props.navData}>
    <IndexComp key='index' />
  </Layout>
)

export default withPageData(Index)