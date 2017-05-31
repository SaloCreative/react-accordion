'use strict';

import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';

const styles = {
  accordionWrapper: {
    position: 'relative',
    width: '100%'
  },
  accordionItem: {
    borderBottom: '1px solid',
    borderColor: props => props.styles.contentBackground
  },
  accordionTitle: {
    padding: '20px',
    margin: '0',
    cursor: 'pointer',
    background: props => props.styles.titleBackground,
    color:  props => props.styles.titleColor,
    '.active &': {
      background: props => props.styles.titleBackgroundActive,
      color:  props => props.styles.titleColorActive
    }
  },
  accordionContent: {
    display: 'none',
    padding: '20px',
    background: props => props.styles.contentBackground,
    color: props => props.styles.contentColor,
    '.active &': {
      display: 'block'
    }
  }
};

class AccordionItem extends Component {
  render() {
    const { classes, i, item, active } = this.props;
    let activeClass= '';
    if (i == active) {
      activeClass = 'active';
    }
    return (
      <div className={ `accordion__item ${ classes.accordionItem } ${ activeClass }` } >
        <h4 className={ `accordion__title ${ classes.accordionTitle }` }
            data-index={ i }
            onClick={ this.props.itemClicked(i) }>
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

  toggleAccordion() {
    return (e) => {
     this.setState({activeTab: e.target.getAttribute('data-index')});
    };
  }

  render() {
    const { classes, data } = this.props;
    let accordionItems;
    if (data) {
      accordionItems = data.map(
        (item, i) =>
          <AccordionItem { ...this.props }
              key={ i }
              i={ i }
              item={ item }
              active={ this.state.activeTab }
              itemClicked={ () => this.toggleAccordion() } />
      );
    }
    return (
      <div className={ `accordion__wrapper ${ classes.accordionWrapper }` } >
        { accordionItems }
      </div>
    );
  }
}

Accordion.defaultProps = {
  styles: {
    titleBackground: '#F7F8F9',
    titleColor: '#000',
    titleBackgroundActive: '#000',
    titleColorActive: '#fff',
    contentBackground: '#fff',
    contentColor: '#000'
  }
};

Accordion.propTypes = {
  data: PropTypes.array.isRequired,
  styles: PropTypes.object
};


export default injectSheet(styles)(Accordion)