const TextField = (placeholder) => {
    return (
        <input type="text"  placeholder={placeholder}></input>
    )
}

TextField.defaultProps = {
    text: 'replace me',
    placeholder: 'replace me',
}

export default TextField
