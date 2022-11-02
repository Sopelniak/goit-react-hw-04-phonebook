import PropTypes from 'prop-types';
import { Component } from 'react';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <>
        <section>
          <h2>{title}</h2>
          {children}
        </section>
      </>
    );
  }
}

export { Section };

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
