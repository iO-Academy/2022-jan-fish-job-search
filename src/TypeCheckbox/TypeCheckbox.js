
const TypeCheckbox = (props) => {

    return (
        <div className={'form-check'}>
            <input className="form-check-input" type="checkbox" value="" id={props.type} />
            <label className="form-check-label" htmlFor={props.type}>{props.type}</label>
        </div>
    )
}

export default TypeCheckbox