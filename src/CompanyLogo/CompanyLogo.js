const CompanyLogo = (props) => {

    return (
        <img className={'img-fluid'} src={props.logo} alt={'logo for ' + props.company} />
    )


}

export default CompanyLogo