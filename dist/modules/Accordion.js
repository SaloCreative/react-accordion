'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var styles = {
  accordionWrapper: {
    position: 'relative',
    width: '100%'
  },
  accordionItem: {
    borderBottom: '1px solid',
    borderColor: function borderColor(props) {
      return props.styles.contentBackground;
    }
  },
  accordionTitle: {
    padding: '20px',
    margin: '0',
    cursor: 'pointer',
    background: function background(props) {
      return props.styles.titleBackground;
    },
    color: function color(props) {
      return props.styles.titleColor;
    },
    '.active &': {
      background: function background(props) {
        return props.styles.titleBackgroundActive;
      },
      color: function color(props) {
        return props.styles.titleColorActive;
      }
    }
  },
  accordionContent: {
    padding: '20px',
    background: function background(props) {
      return props.styles.contentBackground;
    },
    color: function color(props) {
      return props.styles.contentColor;
    }
  }
};

var AccordionItem = (function (_Component) {
  _inherits(AccordionItem, _Component);

  function AccordionItem() {
    _classCallCheck(this, AccordionItem);

    _Component.apply(this, arguments);
  }

  AccordionItem.prototype.renderContent = function renderContent() {
    var _props = this.props;
    var classes = _props.classes;
    var i = _props.i;
    var item = _props.item;
    var active = _props.active;

    if (i == active) {
      return _react2['default'].createElement(
        'div',
        { className: 'accordion__content ' + classes.accordionContent },
        item.content
      );
    }
    return null;
  };

  AccordionItem.prototype.render = function render() {
    var _props2 = this.props;
    var classes = _props2.classes;
    var i = _props2.i;
    var item = _props2.item;

    return _react2['default'].createElement(
      'div',
      { className: 'accordion__item ' + classes.accordionItem },
      _react2['default'].createElement(
        'h4',
        { className: 'accordion__title ' + classes.accordionTitle,
          'data-index': i,
          onClick: this.props.itemClicked(i) },
        item.label
      ),
      this.renderContent()
    );
  };

  return AccordionItem;
})(_react.Component);

AccordionItem.propTypes = {
  data: _react.PropTypes.array.isRequired,
  i: _react.PropTypes.number.isRequired,
  classes: _react.PropTypes.object.isRequired
};

var Accordion = (function (_Component2) {
  _inherits(Accordion, _Component2);

  function Accordion(props) {
    _classCallCheck(this, Accordion);

    _Component2.call(this, props);
    this.state = {
      activeTab: 0
    };
  }

  Accordion.prototype.toggleAccordion = function toggleAccordion() {
    var _this = this;

    return function (e) {
      _this.setState({ activeTab: e.target.getAttribute('data-index') });
    };
  };

  Accordion.prototype.render = function render() {
    var _this2 = this;

    var _props3 = this.props;
    var classes = _props3.classes;
    var data = _props3.data;

    var accordionItems = undefined;
    if (data) {
      accordionItems = data.map(function (item, i) {
        return _react2['default'].createElement(AccordionItem, _extends({}, _this2.props, {
          key: i,
          i: i,
          item: item,
          active: _this2.state.activeTab,
          itemClicked: function () {
            return _this2.toggleAccordion();
          } }));
      });
    }
    return _react2['default'].createElement(
      'div',
      { className: 'accordion__wrapper ' + classes.accordionWrapper },
      accordionItems
    );
  };

  return Accordion;
})(_react.Component);

exports['default'] = Accordion;

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
  data: _react.PropTypes.array.isRequired,
  styles: _react.PropTypes.object
};

exports['default'] = _reactJss2['default'](styles)(Accordion);
module.exports = exports['default'];