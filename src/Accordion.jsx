'use strict';

import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';

const styles = {
  accordionWrapper: {
    position: 'relative',
    width: '100%'
  },
  accordionItem: {
    borderBottom: '1px solid #fff'
  },
  accordionTitle: {
    padding: '20px',
    margin: '0',
    cursor: 'pointer',
    background: '#F7F8F9',
    '.active &': {
      background: '#000',
      color: '#fff'
    }
  },
  accordionContent: {
    display: 'none',
    padding: '20px',
    '.active &': {
      display: 'block'
    }
  }
};

class AccordionItem extends Component {
  render() {
    const { classes, i, item, active } = this.props;
    let activeClass= '';
    if (i === active) {
      activeClass = 'active';
    }
    return (
      <div className={ `accordion__item ${ classes.accordionItem } ${ activeClass }` } >
        <h4 className={ `accordion__title ${ classes.accordionTitle }` } >
          { item.label }
        </h4>
        <div className={ `accordion__content ${ classes.accordionContent }` } >
          { item.content }
        </div>
      </div>
    );
  }
}

AccordionItem.propTypes = {
  data: PropTypes.array.isRequired,
  i: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired
};

export default class Accordion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    }
  }

  render() {
    const { classes, data } = this.props;
    let accordionItems;
    if (data) {
      accordionItems = data.map(
        (item, i) =>
          <AccordionItem { ...this.props } key={ i } i={ i } item={ item } active={ this.state.activeTab } />
      );
    }
    return (
      <div className={ `accordion__wrapper ${ classes.accordionWrapper }` } >
        { accordionItems }
      </div>
    );
  }
}

Accordion.propTypes = {
  data: PropTypes.array.isRequired
};

export default injectSheet(styles)(Accordion)