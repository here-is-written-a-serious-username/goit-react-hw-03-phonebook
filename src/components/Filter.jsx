import React, { Component } from 'react';
import { PropTypes } from 'prop-types';


class Filter extends Component {

    render() {
        const { handleChange, filter } = this.props;

        return (
            <label >
                <input
                    type="text"
                    name="filter"
                    onChange={handleChange}
                    value={filter}
                />
            </label>
        )
    }
}


export default Filter;

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
}