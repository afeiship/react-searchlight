import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Draggable from 'react-draggable';

const CLASS_NAME = 'react-searchlight';

export default class ReactSearchlight extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The default options for react-draggable.
     */
    options: PropTypes.object
  };

  render() {
    const { className, options, ...props } = this.props;
    return (
      <Draggable {...options}>
        <div
          data-component={CLASS_NAME}
          className={classNames(CLASS_NAME, className)}
          {...props}
        />
      </Draggable>
    );
  }
}
