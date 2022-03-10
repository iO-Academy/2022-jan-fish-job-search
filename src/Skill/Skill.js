const Skill = (props) => {

    let skillClass = props.skillClass ? props.skillClass : 'bg-teal'
    skillClass += ' badge m-1 bg-teal'

    return (
        <span className={skillClass}>{props.jobSkill}</span>
    )
}

export default Skill