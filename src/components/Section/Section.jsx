import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <>
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    </>
  );
}

export { Section };

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
