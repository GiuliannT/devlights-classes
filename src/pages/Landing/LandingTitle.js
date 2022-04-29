import PropTypes from 'prop-types';

// children tiene que estar entre fragments <></> o ser solu 1 etiqueta
export const LandingTitle = ({ prop1, children }) => {
    return (
        <div>
            <h1>Title: '{prop1}'</h1>
            <p>{children}</p>
        </div>
    )
}


// Verify that the component is receiving the correct props
LandingTitle.propTypes = {
    prop1 : PropTypes.string.isRequired
}
