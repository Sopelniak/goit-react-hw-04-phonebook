import PropTypes from 'prop-types';

function Filter({ filter, handleInput }) {
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

export { Filter };

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
};
