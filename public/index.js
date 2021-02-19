import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactSearchlight from '../src/main';
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
