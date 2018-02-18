import React from 'react';

import { IntroductionComponent } from './Introduction';
import { ExperienceComponent } from './Experience';
import { SkillsComponent } from './Skills';

const Resume = ({ introduction, experience, skills }) => {
  return (
    <React.Fragment>
      <IntroductionComponent key='resume__introduction' { ...introduction } />
      <ExperienceComponent key='resume__experience' data={ experience } />
      <SkillsComponent key='resume__skills' data={ skills } />
    </React.Fragment>
  )

}

export { 
  Resume
}