import React from "react";

import "../../styles/List.css";

//Display the list of defined options
const List = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="list-item">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="list-item-url"
      >
        {link.text}
      </a>
    </li>
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default List;
