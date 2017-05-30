# react-accordion

Simple React accordion component

## Usage

Install

```
yarn add @salocreative/react-accordion
```

Include the component at the top of the component it's required in.

```
import ComponentName from '@salocreative/react-accordion';
```

Implement as follows

```
const data = [
  {
    label: 'Accordion label 1',
    content: 'Lorem ipsum dolor sit amet'
  },
  {
    label: 'Accordion label 2',
    content: 'Lorem ipsum dolor sit amet'
  }
];

<Accordion { ...this.props } data={ data } />

```

You can also set some style ovverides for the core colours in the component

```
const styles = {
  titleBackground: '#F7F8F9',
  titleColor: '#000',
  titleBackgroundActive: '#000',
  titleColorActive: '#fff',
  contentBackground: '#fff',
  contentColor: '#000'
};

<Accordion { ...this.props } data={ data } styles={ styles } />

```

## LICENSE

MIT
