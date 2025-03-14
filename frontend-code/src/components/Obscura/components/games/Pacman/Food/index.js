import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { cssPosition } from '../helpers';
import './style.css';

export default function Food({ gridSize, position, eaten, big }) {
    const className = classNames('food', { eaten, big });

    const style = cssPosition(position, gridSize - 1.4);

    return (
        <span className={className} style={style} />
    );
}

Food.propTypes = {
    gridSize: PropTypes.number.isRequired,
    position: PropTypes.array.isRequired,
    eaten: PropTypes.bool.isRequired,
    big: PropTypes.bool.isRequired
};

