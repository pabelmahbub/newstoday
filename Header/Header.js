import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
<nav class="navbar navbar-light text-center text-uppercase font-weight-bold p-3 mb-2 bg-info mb-3 text-white">
  <span class="navbar-brand mb-0 h1">News Today</span>
</nav>

<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">"24/7, 365" Days</h1>
    <p class="lead">View the latest news and breaking news today for World, weather, entertainment, politics and health at newstoday.com.</p>
  </div>
</div>
</div>
  );
};

export default Header;