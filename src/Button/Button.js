
const Button = (props) => {

    let buttonClass = props.buttonClass ? props.buttonClass : 'btn-primary'
    buttonClass += ' btn p-2 my-2'

    return (
        <>
            <button onClick={props.fetchSearchResults} type="button" className={buttonClass}>{props.buttonLabel}</button>
        </>
    )
}

export default Button