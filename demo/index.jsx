'use strict';

import React from 'react';
import { render } from 'react-dom';

import YourComponent from '../src/YourComponent';

class Demo extends React.Component {

  render() {
    return (
      <YourComponent />
    );
  }

}

render(<Demo />, document.getElementById('demo'));
