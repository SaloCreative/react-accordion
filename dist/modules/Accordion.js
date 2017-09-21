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

  AccordionItem.prototype.shouldRender = function shouldRender() {
    var _props = this.props;
    var i = _props.i;
    var active = _props.active;
    var multipleOpen = _props.multipleOpen;

    if (multipleOpen) {
      return active.activeTabs.includes(i);
    } else {
      return active.activeTab === i;
    }
  };

  AccordionItem.prototype.renderContent = function renderContent() {
    var _props2 = this.props;
    var classes = _props2.classes;
    var item = _props2.item;

    var shouldRender = this.shouldRender();
    if (shouldRender) {
      return _react2['default'].createElement(
        'div',
        { className: 'accordion__content ' + classes.accordionContent },
        item.content
      );
    }
    return null;
  };

  AccordionItem.prototype.render = function render() {
    var _this = this;

    var _props3 = this.props;
    var classes = _props3.classes;
    var i = _props3.i;
    var item = _props3.item;

    return _react2['default'].createElement(
      'div',
      { className: 'accordion__item ' + classes.accordionItem },
      _react2['default'].createElement(
        'h4',
        { className: 'accordion__title ' + classes.accordionTitle,
          onClick: function () {
            return _this.props.itemClicked(i);
          } },
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
  classes: _react.PropTypes.object.isRequired,
  multipleOpen: _react.PropTypes.bool
};

var Accordion = (function (_Component2) {
  _inherits(Accordion, _Component2);

  function Accordion(props) {
    _classCallCheck(this, Accordion);

    _Component2.call(this, props);
    this.state = {
      activeTab: '',
      activeTabs: [] // If we use the multiple open options
    };
  }

  Accordion.prototype.componentDidMount = function componentDidMount() {
    if (this.props.firstOpen) {
      this.setState({
        activeTab: 0,
        activeTabs: [0]
      });
    }
  };

  Accordion.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.closeAll || this.props.openAll) {
      if (this.props.closeAll !== prevProps.closeAll) {
        this.closeAll();
      } else if (this.props.openAll !== prevProps.openAll) {
        this.openAll();
      }
    }
  };

  Accordion.prototype.toggleAccordion = function toggleAccordion(i) {
    if (!this.props.multipleOpen) {
      this.toggleAccordionSingle(i);
    } else {
      this.toggleAccordionMultiple(i);
    }
  };

  Accordion.prototype.toggleAccordionSingle = function toggleAccordionSingle(i) {
    if (this.props.activeClickClose && i === this.state.activeTab) {
      this.setState({ activeTab: '' });
    } else {
      this.setState({ activeTab: i });
    }
  };

  Accordion.prototype.toggleAccordionMultiple = function toggleAccordionMultiple(i) {
    if (this.state.activeTabs.includes(i)) {
      var index = this.state.activeTabs.indexOf(i);
      this.setState({ activeTabs: [].concat(this.state.activeTabs.slice(0, index), this.state.activeTabs.slice(index + 1)) });
    } else {
      this.setState({ activeTabs: [].concat(this.state.activeTabs, [i]) });
    }
  };

  Accordion.prototype.closeAll = function closeAll() {
    this.setState({ activeTabs: [], activeTab: '' });
  };

  Accordion.prototype.openAll = function openAll() {
    var arr = [];
    this.props.data.forEach(function (value, i) {
      arr.push(i);
    });
    this.setState({ activeTabs: arr, activeTab: 0 });
  };

  Accordion.prototype.render = function render() {
    var _this2 = this;

    var _props4 = this.props;
    var classes = _props4.classes;
    var data = _props4.data;
    var multipleOpen = _props4.multipleOpen;

    var accordionItems = undefined;
    if (data) {
      accordionItems = data.map(function (item, i) {
        return _react2['default'].createElement(AccordionItem, _extends({}, _this2.props, {
          key: i,
          i: i,
          item: item,
          active: _this2.state,
          itemClicked: function (i) {
            return _this2.toggleAccordion(i);
          },
          multipleOpen: multipleOpen
        }));
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
  },
  multipleOpen: false,
  firstOpen: true,
  activeClickClose: true
};

Accordion.propTypes = {
  data: _react.PropTypes.array.isRequired,
  styles: _react.PropTypes.object,
  multipleOpen: _react.PropTypes.bool,
  activeClickClose: _react.PropTypes.bool,
  firstOpen: _react.PropTypes.bool
};

exports['default'] = _reactJss2['default'](styles)(Accordion);
module.exports = exports['default'];