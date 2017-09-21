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
    padding: '20px',
    background: props => props.styles.contentBackground,
    color: props => props.styles.contentColor
  }
};

class AccordionItem extends Component {
  renderContent() {
    const { classes, i, item, active } = this.props;
    if (i === active) {
      return (
        <div className={ `accordion__content ${ classes.accordionContent }` } >
          { item.content }
        </div>
      );
    }
    return null
  }

  render() {
    const { classes, i, item } = this.props;
    return (
      <div className={ `accordion__item ${ classes.accordionItem }` } >
        <h4 className={ `accordion__title ${ classes.accordionTitle }` }
            onClick={ () => this.props.itemClicked(i) }>
          { item.label }
        </h4>
        { this.renderContent() }
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
      activeTab: ''
    }
  }

  componentDidMount() {
    console.log(this.props.firstOpen);
    if (this.props.firstOpen) {
      this.setState({ activeTab: 0 });
    }
  }

  toggleAccordion(i) {
    if (this.props.activeClickClose && i === this.state.activeTab) {
      this.setState({ activeTab: '' });
    } else {
      this.setState({ activeTab: i });
    }
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
              itemClicked={ (i) => this.toggleAccordion(i) } />
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
  },
  multipleOpen: false,
  firstOpen: true,
  activeClickClose: true
};

Accordion.propTypes = {
  data: PropTypes.array.isRequired,
  styles: PropTypes.object,
  multipleOpen: PropTypes.bool,
  activeClickClose: PropTypes.bool,
  firstOpen: PropTypes.bool
};


export default injectSheet(styles)(Accordion)