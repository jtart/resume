import React from 'react';
import { Introduction } from '../containers/Introduction'

const Index = () => (
  <Introduction key='index__introduction'>
    <React.Fragment>
      <p>Hello! My name is Jordan.</p>
      <p>I am a full-stack web developer who makes magic web things happen on the interwebs.</p>
    </React.Fragment>
  </Introduction>
)

export {
  Index
}