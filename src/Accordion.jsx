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

  shouldRender() {
    const { i, active, multipleOpen } = this.props;
    if (multipleOpen) {
      return active.activeTabs.includes(i);
    } else {
      return active.activeTab === i;
    }
  }

  renderContent() {
    const { classes, item } = this.props;
    const shouldRender = this.shouldRender();
    if (shouldRender) {
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
  classes: PropTypes.object.isRequired,
  multipleOpen: PropTypes.bool
};

export default class Accordion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: '',
      activeTabs: [] // If we use the multiple open options
    }
  }

  componentDidMount() {
    console.log(this.props.firstOpen);
    if (this.props.firstOpen) {
      this.setState(
        {
          activeTab: 0,
          activeTabs: [0]
        }
      );
    }
  }

  toggleAccordion(i) {
    if (!this.props.multipleOpen) {
      this.toggleAccordionSingle(i);
    } else {
      this.toggleAccordionMultiple(i);
    }
  }

  toggleAccordionSingle(i) {
    if (this.props.activeClickClose && i === this.state.activeTab) {
      this.setState({ activeTab: '' });
    } else {
      this.setState({ activeTab: i });
    }
  }

  toggleAccordionMultiple(i) {
    if (this.state.activeTabs.includes(i)) {
      const index = this.state.activeTabs.indexOf(i);
      this.setState({ activeTabs: [
        ...this.state.activeTabs.slice(0, index),
        ...this.state.activeTabs.slice(index + 1)
      ] });
    } else {
      this.setState({ activeTabs: [
        ...this.state.activeTabs,
        i
      ] });
    }
  }

  render() {
    const { classes, data, multipleOpen } = this.props;
    let accordionItems;
    if (data) {
      accordionItems = data.map(
        (item, i) =>
          <AccordionItem { ...this.props }
            key={ i }
            i={ i }
            item={ item }
            active={ this.state }
            itemClicked={ (i) => this.toggleAccordion(i) }
            multipleOpen={ multipleOpen }
          />
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