const TextField = (label, placeholder) => {
    return (
    <form>
        <label>{label}</label>
        <TextField id="outlined-basic" label="Outlined" placeholder={placeholder} variant="outlined" />
    </form>
    )
}

export default TextField
