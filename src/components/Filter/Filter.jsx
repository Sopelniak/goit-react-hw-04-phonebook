import { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    const { filter, handleInput } = this.props;

    return (
      <>
        <label>
          <span>Find contacts by name</span>

          <input
            onChange={handleInput}
            value={filter}
            type="text"
            name="filter"
          />
        </label>
      </>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
};
