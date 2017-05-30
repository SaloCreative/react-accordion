'use strict';

import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss'

const styles = {
  button: {
    background: 'none',
    border: 'none',
    '&:hover': {
      background: '#00aced'
    }
  },
  label: {
    fontWeight: 'bold'
  }
};


@injectSheet(styles)
export default class Accordion extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
        <button className={ classes.button }>
          <span className='label'>
            Test
          </span>
        </button>
    );
  }

}