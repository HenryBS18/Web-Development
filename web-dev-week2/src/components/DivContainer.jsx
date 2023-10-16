import React from "react";

const heading = React.createElement('h1', null, 'React');
const strong = React.createElement('strong', null, 'best tool');
const paragraph = React.createElement('p', null, ['The ', strong, ' for build website']);
const DivContainer = React.createElement('div', { className: 'container' }, [heading, paragraph]);

export default DivContainer;