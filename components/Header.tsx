"use client";
import React, { useState } from 'react';

/**
 * Renders a header with the given text.
 * @param {HeaderProps} props - The props for the Header component.
 * @param {string} props.text - The text to display in the header.
 * @returns {JSX.Element} A React JSX element representing the header.
 */

type HeaderProps = {
    text: string;
}
const Header: React.FC<HeaderProps> = ({text}): JSX.Element => {
    const [searchTerm, setSearchTerm] = useState('');


/**
 * Event handler for handling input text change
 * @param e MouseEvent<HTMLButtonElement, MouseEvent>
 * @param searchTerm string
 * @returns void
 */

const handleSearch: React.MouseEventHandler<HTMLButtonElement> | undefined = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
  const bodyText:string = document.body.innerText.toLowerCase();

  if (bodyText.includes(searchTerm)) {
    console.log(`Found "${searchTerm}" on the page!`);
  } else {
    console.log(`Could not find "${searchTerm}" on the page.`);
  }
}

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Ekip Kalir</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/projects/team">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/about">About</a></li>
            <li><a className="dropdown-item" href="/projects">Projects</a></li>
            <li><a className="dropdown-item" href="/projects/team">Team</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/contact">Contact</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit" onClick ={handleSearch}>Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Header;