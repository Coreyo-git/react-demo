import PropTypes from 'prop-types'


const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>            
        </header>
    )
}
// Typing for props
Header.PropTypes = {
    title: PropTypes.string.isRequired,
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header
