'use strict';

import React from 'react';
import { render } from 'react-dom';

import Accordion from '../src/Accordion';

class Demo extends React.Component {

  render() {

    const data = [
      {
        label: 'Accordion label 1',
        content: 'Lorem ipsum dolor sit amet'
      },
      {
        label: 'Accordion label 2',
        content: 'Lorem ipsum dolor sit amet'
      }
    ];

    return (
      <Accordion { ...this.props } data={ data } />
    );
  }

}

render(<Demo />, document.getElementById('demo'));
