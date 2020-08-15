import React from 'react';

const Navbar = () => {
  return (
    <nav class="navbar sticky-top fixed-top navbar-expand-lg navbar-light">
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="navbar-brand" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="navbar-brand" href="#portfolio">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="navbar-brand" href="#open-sources">Open-Sources</a>
          </li>
          <li class="nav-item">
            <a class="navbar-brand" href="#medium">Medium</a>
          </li>
        </ul>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  )
}

export default Navbar;
