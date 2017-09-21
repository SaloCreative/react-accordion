# react-accordion

Simple React accordion component

## Usage

Install

```
yarn add @salocreative/react-accordion
```

Include the component at the top of the component it's required in.

```
import Accordion from '@salocreative/react-accordion';
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
  },
  {
    label: 'Example with jsx',
    content: (
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque quis est eget vestibulum.
          Donec urna lorem, ornare non sollicitudin a, euismod quis purus.</p>
        <img src='https://placeholdit.imgix.net/~text?txtsize=24&txt=Image&w=150&h=150' />
        <p><button>A button</button></p>
      </div>
    )
  }
];

<Accordion data={ data } />

```

### Cofiguration options

as well as passing in the data array to populate the accordion you can also use the following config options:

- `multipleOpen: PropTypes.bool` default is `false` - toggles whether we have one or multiple items open at once
- `activeClickClose: PropTypes.bool` default is `true` - toggles functionality of whether a click on an open accordion closes it or we enforce at least one item being open
- `firstOpen: PropTypes.bool` default is `true` - toggles whether we start with the first item open



You can also set some style overrides for the core colours in the component

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
