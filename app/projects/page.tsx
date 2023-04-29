import React from 'react'

/**
 * Returns a React component that renders a projects page.
 * @returns A React component.
 */

const ProjectsPage: React.FC = (): JSX.Element => {
  return (
    <div>
        <h1>Projects Page</h1>

        <h2>iOS Mobile Engineer:  2022-2023</h2>
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

        <h2>Full Stack Engineer:  2021-2022</h2>
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

        <h2>Business Analyst / Operation Planner:   2002-2017</h2>
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
    </div>
  );
};

export default ProjectsPage;