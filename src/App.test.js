import React from 'react';
import ReactDOM from 'react-dom';
import AvocadoApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AvocadoApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});