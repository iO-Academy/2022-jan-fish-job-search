const CompanyLogo = (props) => {
    return (
        <img className={'img-fluid p-2'} src={props.logo} alt={'logo for ' + props.company} />
    )
}

export default CompanyLogo