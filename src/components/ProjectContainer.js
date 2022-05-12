import React from 'react';
import Project from './Project';
import knowNostalgia from '../images/react-knownostalgia-960x540.png';
import storyTeller from '../images/storyteller-thumbnail-960x540.jpg';

function ProjectContainer() {
  let tempDesc = `text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text`;
  return (
    <div className="container project-container">
      <div className="row project-container-row">
        <Project
          title="Know(Nostalgia)"
          image={knowNostalgia}
          description={tempDesc}
        />
        <Project
          title="Storyteller"
          image={storyTeller}
          description={tempDesc}
        />
        <Project
          title="Placeholder"
          image={knowNostalgia}
          description={tempDesc}
        />
        <Project
          title="Placeholder"
          image={knowNostalgia}
          description={tempDesc}
        />
        <Project
          title="Placeholder"
          image={knowNostalgia}
          description={tempDesc}
        />
        <Project
          title="Placeholder"
          image={knowNostalgia}
          description={tempDesc}
        />
      </div>
    </div>
  );
}

export default ProjectContainer;
