const Skill = (props) => {

    let skillClass = props.skillClass ? props.skillClass : 'bg-teal'
    skillClass += ' badge m-1 bg-teal'

    return (
        <div>
            <span className={skillClass}>{props.jobSkill}</span>
        </div>

    )
}

export default Skill