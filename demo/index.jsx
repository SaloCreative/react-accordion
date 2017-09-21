'use strict';

import React from 'react';
import { render } from 'react-dom';

import Accordion from '../src/Accordion';

class Demo extends React.Component {

  constructor() {
    super();
    this.state = {
      closeAll: '',
      openAll: ''
    }
  }

  closeAll() {
    this.setState({ closeAll: Date.now() })
  }

  openAll() {
    this.setState({ openAll: Date.now() })
  }

  render() {

    const data = [
      {
        label: 'Accordion label 1',
        content: (
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque quis est eget vestibulum.
                Donec urna lorem, ornare non sollicitudin a, euismod quis purus.</p>
              <img src='https://placeholdit.imgix.net/~text?txtsize=24&txt=Image&w=150&h=150' />
              <p><button>A button</button></p>
            </div>
        )
      },
      {
        label: 'Accordion label 2',
        content: 'Lorem ipsum dolor sit amet'
      },
      {
        label: 'Accordion label 3',
        content: 'Lorem ipsum dolor sit amet'
      },
      {
        label: 'Accordion label 4',
        content: 'Lorem ipsum dolor sit amet'
      }
    ];

    return (
      <div>
        <a onClick={ () => this.closeAll() }>Close All</a>&nbsp; &nbsp;<a onClick={ () => this.openAll() }>Open All</a>
        <br /><br />
        <Accordion data={ data } closeAll={ this.state.closeAll } openAll={ this.state.openAll } />
      </div>
    );
  }

}

render(<Demo />, document.getElementById('demo'));
