import './App.css'
import Header from './components/Header.jsx'
import TeamCard from './components/TeamCard.jsx'
import teams from './teams.json' 

function App() {

  return (
    <>
      <div>
        <Header></Header>
        <div className="team-grid">
          {teams.map((team, idx) => (
            <TeamCard
              key = {idx}
              teamName={team.teamName}
              teamLocation={team.teamLocation}
              teamImage={team.teamImage}
              teamLink={team.teamLink}
              teamRanking={team.teamRanking}
            />
          ))}
        </div>

      </div>

    </>
  )
}

export default App
