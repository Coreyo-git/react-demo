import PropTypes from 'prop-types'


    const Header = ({ title }) => {
    return (
        <header>
            <h1 style={{color: 'blue', backgroundColor: 'black'}} >{title}</h1>            
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

// Typing for props
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
const headingStyle = {
    color: 'blue',
    backgroundColor: 'black'
}

export default Header
