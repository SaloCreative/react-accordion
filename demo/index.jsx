'use strict';

import React from 'react';
import { render } from 'react-dom';

import Accordion from '../src/Accordion';

class Demo extends React.Component {

  render() {

    const data = [
      {
        label: 'Accordion label 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque quis est eget vestibulum. Donec urna lorem, ornare non sollicitudin a, euismod quis purus. Mauris dapibus libero quis odio congue, vitae consectetur nisi condimentum. Nam sit amet ipsum ornare, efficitur elit nec, viverra nibh. Etiam consectetur semper porta. Suspendisse eros mi, gravida id hendrerit ut, lobortis a sem. Fusce sit amet turpis velit. Maecenas ornare dui arcu, sed rhoncus risus rutrum nec. Vivamus vulputate in magna ut congue. Integer justo arcu, commodo a dui at, tempus luctus neque. Nullam vitae lacus a neque laoreet luctus. Aenean nec tempor libero, eu mattis neque. Nunc eu bibendum metus. Aenean sit amet augue at dui fringilla euismod quis vel massa. Integer eros mi, volutpat id ipsum ut, varius tristique velit. In nunc justo, bibendum id turpis nec, cursus commodo est. Proin consectetur, dolor ut venenatis gravida, turpis sem dignissim odio, eu faucibus tortor arcu vitae dolor. Nullam lobortis leo tellus, sit amet ornare ipsum euismod at. Pellentesque vel dolor dui. Duis sit amet dictum purus. Sed fringilla, neque eu molestie egestas, orci dolor viverra risus, id commodo felis ante vel erat.'
      },
      {
        label: 'Accordion label 2',
        content: 'Lorem ipsum dolor sit amet'
      },
      {
        label: 'Accordion label 3',
        content: 'Lorem ipsum dolor sit amet'
      },
      {
        label: 'Accordion label 4',
        content: 'Lorem ipsum dolor sit amet'
      }
    ];

    return (
      <Accordion { ...this.props } data={ data } />
    );
  }

}

render(<Demo />, document.getElementById('demo'));
