import React, { ReactNode } from 'react'

type ProjectsLayoutProps = {
    children: ReactNode
}
/**
   * This component is the layout for the projects page.
   * @param {ProjectsLayoutProps} props - The props for this component.
   * @param {ReactNode} props.children - The children to be rendered in the layout.
   * @return {JSX.Element} The ProjectsLayout component.
   */

export const metadata = {
    title: 'Ekip Kalir projects team structure page.',
    description: 'Team structure page for Ekip Kalir',
    author: 'Ekip Kalir',
    siteUrl: 'https://ekipkalir.com/team',
  }

const ProjectsLayout = ({children}: ProjectsLayoutProps):JSX.Element => {
  return (
    <div className="container-fluid">
        {children}
    </div>
  )
}

export default ProjectsLayout;