import PropTypes from 'prop-types';

export const Item = ({ text }) => {
    return <p>{text}</p>;
}

Item.propTypes = {
    text: PropTypes.string.isRequired
}