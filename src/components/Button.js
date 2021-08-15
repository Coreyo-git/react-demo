const Button = ({onClick, color, text}) => {
    return <button onClick={onClick}  style={{backgroundColor: color}} className='btn'>{text}</button>
}

Button.defaultProps = {
    color: 'green',
    text: 'Default',
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
