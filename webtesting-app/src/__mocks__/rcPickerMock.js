// Comprehensive mock for @rc-component/picker
const React = require('react');

const MockPicker = () => null;

module.exports = {
  default: MockPicker,
  PickerPanel: MockPicker,
  RangePicker: MockPicker,
  generatePicker: () => MockPicker,
  generateCalendar: () => MockPicker,
  generateRangePicker: () => MockPicker,
};

