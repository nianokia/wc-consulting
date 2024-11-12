import React from "react";

const PsychWidget = () => {
  const href = 'https://www.psychologytoday.com/profile/181988';
  const className = 'sx-verified-seal';

  const scriptProps = {
    src: 'https://member.psychologytoday.com/verified-seal.js',
    type: 'text/javascript',
    'data-badge': '13',
    'data-id': '181988',
    'data-code': 'aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy9bQkFER0VdL3Byb2ZpbGUvW1BST0ZJTEVfSURdP2NhbGxiYWNrPXN4Y2FsbGJhY2s=',
    async: true
  };

  const link = React.createElement(
    'a', { href, className }
  );

  return (
    <div>
      {link}
      <script {...scriptProps} />
    </div>
  );

}

export default PsychWidget;