import React  ,{useState,} from 'react'
import ProfileCard from './components/ProfileCard'
import ProfileForm from './components/ProfileForm'

function App() {
  const [allProfiles, setAllProfile] = useState([
    {
      firstname: "suntaa",
      lastname: " marcus",
      email: "generalmarcus@gmail.com",
      phone:"0592137102"
    }  
  ])
  const updateallprofiles = (profile) => {
    let arr = allProfiles;
    arr.push = (profile)
    setAllProfile([...arr])
  };

  return (
<>
    <div className='app'>
      <h1>Our profile maker</h1>
    </div>
    <ProfileForm sumit={updateallprofiles}/>
        <hr/>
        <div className="list">
          {allProfiles.map((person,index) => (
<ProfileCard key={index} card={person}/>
          ))}
        </div>
        </>
)}

export default App