import { Introduction } from '../../../containers/Introduction'

const IntroductionComponent = ({ description }) => (
  <Introduction>
    <p>{description}</p>
  </Introduction>
)

export {
  IntroductionComponent
}