'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _unexpected = require('unexpected');

var _unexpected2 = _interopRequireDefault(_unexpected);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _Accordion = require('./Accordion');

var _Accordion2 = _interopRequireDefault(_Accordion);

var shallowRenderer = _reactAddonsTestUtils2['default'].createRenderer();

describe('Your Component Test Case', function () {

  it('should render', function () {
    shallowRenderer.render(_react2['default'].createElement(_Accordion2['default'], null));
    _unexpected2['default'](shallowRenderer.getRenderOutput(), 'to be defined');
  });
});