import React from 'react';
import { Link } from 'react-router-dom';

const faName = {
  "add-note": "plus",
  "shortcuts": "star",
  "notes": "address-book",
  "notebooks": "book",
  "tags": "tag"
};

const NavButton = ({ type }) => (
  <Link to={`/${type}`}>
    <i className={`fa fa-${faName[type]}`}></i>
  </Link>
);

export default NavButton;
