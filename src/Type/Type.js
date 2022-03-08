const Type = (props) => {

    return (
        <>
            {(props.type != null) ? <span className={'badge rounded-pill bg-primary'}>{props.type}</span> : ''}
        </>
    )


}

export default Type