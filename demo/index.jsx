'use strict';

import React from 'react';
import { render } from 'react-dom';

import Accordion from '../src/Accordion';

class Demo extends React.Component {

  render() {
    return (
      <Accordion />
    );
  }

}

render(<Demo />, document.getElementById('demo'));
