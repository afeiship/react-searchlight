# react-searchlight
> Searchlight for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-searchlight
```

## properties
| Name      | Type   | Required | Default | Description                              |
| --------- | ------ | -------- | ------- | ---------------------------------------- |
| className | string | false    | -       | The extended className for component.    |
| options   | object | false    | -       | The default options for react-draggable. |


## usage
1. import css
  ```scss
  @import "~@jswork/react-searchlight/dist/style.css";

  // or use sass
  @import "~@jswork/react-searchlight/dist/style.scss";

  // customize your styles:
  $react-searchlight-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactSearchlight from '@jswork/react-searchlight';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-searchlight">
          <h1 className="text-center mb-5 text-white text-2xl">
            Searchlight for react.
          </h1>
          <iframe width="100%" src="https://m.baidu.com"></iframe>
          <ReactSearchlight />
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-searchlight/


## license
Code released under [the MIT license](https://github.com/afeiship/react-searchlight/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-searchlight
[version-url]: https://npmjs.org/package/@jswork/react-searchlight

[license-image]: https://img.shields.io/npm/l/@jswork/react-searchlight
[license-url]: https://github.com/afeiship/react-searchlight/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-searchlight
[size-url]: https://github.com/afeiship/react-searchlight/blob/master/dist/react-searchlight.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-searchlight
[download-url]: https://www.npmjs.com/package/@jswork/react-searchlight
