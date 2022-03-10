const Type = (props) => {

    return (
        <>
            {(props.type != null) ? <span className={'badge rounded-pill ' + props.backgroundColor}>{props.type}</span> : ''}
        </>
    )
}

export default Type