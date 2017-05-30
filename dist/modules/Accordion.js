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

var AccordionItem = (function (_Component) {
  _inherits(AccordionItem, _Component);

  function AccordionItem() {
    _classCallCheck(this, AccordionItem);

    _Component.apply(this, arguments);
  }

  AccordionItem.prototype.render = function render() {
    var _props = this.props;
    var classes = _props.classes;
    var i = _props.i;
    var item = _props.item;
    var active = _props.active;

    var activeClass = '';
    if (i === active) {
      activeClass = 'active';
    }
    return _react2['default'].createElement(
      'div',
      { className: 'accordion__item ' + classes.accordionItem + ' ' + activeClass },
      _react2['default'].createElement(
        'h4',
        { className: 'accordion__title ' + classes.accordionTitle },
        item.label
      ),
      _react2['default'].createElement(
        'div',
        { className: 'accordion__content ' + classes.accordionContent },
        item.content
      )
    );
  };

  return AccordionItem;
})(_react.Component);

var Accordion = (function (_Component2) {
  _inherits(Accordion, _Component2);

  function Accordion(props) {
    _classCallCheck(this, Accordion);

    _Component2.call(this, props);
    this.state = {
      activeTab: 0
    };
  }

  Accordion.prototype.render = function render() {
    var _this = this;

    var _props2 = this.props;
    var classes = _props2.classes;
    var data = _props2.data;

    var accordionItems = undefined;
    if (data) {
      accordionItems = data.map(function (item, i) {
        return _react2['default'].createElement(AccordionItem, _extends({}, _this.props, { key: i, i: i, item: item, active: _this.state.activeTab }));
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

Accordion.propTypes = {
  data: _react.PropTypes.array.isRequired
};

exports['default'] = _reactJss2['default'](styles)(Accordion);
module.exports = exports['default'];