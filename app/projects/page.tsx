import React from 'react'
import Image from 'next/image';

/**
 * Returns a React component that renders a projects page.
 * @returns A React component.
 */

const ProjectsPage: React.FC = (): JSX.Element => {
  return (
    <div className="container-fluid"> 
      <div className="container-fluid">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <Image  src="/images/marcus-app.webp" 
                width={400}
                height={400}
                className="img-fluid rounded-start"
                alt="marcus-app" />
            </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">iOS Mobile Developer</h5>
            <p className="card-text"> Joined Goldman Sachs Marcus App from the discovery phase, as part of the Team recommends 
                                full stack microservice architecture solutions. Started as an iOS Engineer, and than joined
                                the API integration Team.
            </p>
          <ul>
            <li>
            Joined the project from the discovery phase and focused on iOS App code base, and API integration. 
          </li>
          <li>
            Worked extensively on the backend GraphQL server integration and upgrade to Apollo Server v4.
          </li>
          <li>
            Refactored the gateway services and downstream services according to the upgrade.
          </li>
        </ul>
        <p className="card-text"><small className="text-body-secondary">2022 - 2023</small></p>
      </div>
    </div>
  </div>
</div>

<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <Image  src="/images/future-step.webp" 
              width={400}
              height={400}
              className="img-fluid rounded-start"
              alt="princes-trust" />
    </div><div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Full Stack Mobile Engineer</h5>
        <p className="card-text"> Joined Princess Trust team as a React Native Engineer. He worked on
                                full stack microservice architecture solutions. Started as an React Native Engineer,
                                and than participated Cloud solutions and CI/CD.
        </p>
        <ul>
          <li>
            As a member of agile team, built-up React Native mobile APP that is platform agnostic with 
            high volume throughput, and re-structured CI & CD pipeline.
          </li>
          <li>
            Revised and created the codebase according to the new design guideline.
          </li>
          <li>
            As a member of the Dev Team, worked on and released the Future Steps Mobile App (Prince’s Trust), 
            which is a cross-platform React Native mobile app.
          </li>
          <li>
            Analysed potential solutions based on evolving client requirements and built-up 
            software from the ground up through to completion.
          </li>
          <li>
            Trained\experienced in microservices logic for high throughput software applications,
            both with JavaScript/React and Scala/Play Frameworks.
          </li>
          <li>
            Experienced in ‘Software Development Methods’, Agile, Kanban and Scrum.
          </li>
        </ul>
        <p className="card-text"><small className="text-body-secondary">2021 - 2022</small></p>
      </div>
    </div> 
  </div>
  </div>

  <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <Image  src="/images/ekip-kalir.png" 
              width={400}
              height={400}
              className="img-fluid rounded-start"
              alt="marcus-app" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Business Analyst / Operation Planner</h5>
        <p className="card-text"> Worked in MoD in the command echelon and prepared many Business Analyst documents for the higher echelon.
        </p>
        <ul>
          <li>
            Identified and documented detailed business rules and use cases based on requirements analysis.
          </li>
          <li>
            Orchestrated smooth and effective flow of data to support high echelons users in decision making.
          </li>
          <li>
            Identified and documented project constraints, assumptions, business impacts, risk and scope exclusions.
          </li>
          <li>
            Built library models and reusable knowledge-based assets to produce consistent and streamlined business intelligence results.
          </li>
          <li>
            Recommended data standardisation and usage to ensure data integrity. 
          </li>
        </ul>
        <p className="card-text"><small className="text-body-secondary">2002 - 2017</small></p>
      </div>
    </div>
  </div>
</div>
</div>
</div>
  );
};

export default ProjectsPage;