
const TeamCard = (props) => {
    const { teamName, teamLocation, teamImage, teamLink, teamRanking} = props;
    const isLongName = teamName.length > 20; // Adjust threshold as needed
    
    return (
        <div>
            <img src={teamImage} alt={`An image of the ${teamName}`} className="TeamCard-img"/>
            <div className="TeamCard-info">
                <h2 className={`TeamName-text${isLongName ? " TeamName-text--small" : ""}`}>{teamName}</h2>
                <h3 className="TeamLocation-text">{teamLocation}</h3>
                <h4 className="TeamRanking-text">{teamRanking}</h4>
                <a href={teamLink} className="TeamLink-text" target="_blank" rel="noopener noreferrer">
                    <button className="TeamLink-button">Learn More</button>
                </a>
            </div>
        </div>
    )
}

export default TeamCard;