import React, { Component } from 'react';
import { PropTypes } from 'prop-types';


class Filter extends Component {
    // state = {
    //     filter: '',
    // }

    handleChange = evt => {
        const { name, value } = evt.target;
        this.setState({ [name]: value });
    };

    render() {
        const { handleChange, filter } = this.props;
        // const { filter } = this.state;
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