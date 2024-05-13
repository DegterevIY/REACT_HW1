//import MyButton from "./components/MyButton/MyButton"
import Profile from "./components/Profile/Profile"

function App() {
  const my_profile = [{
    firstName: "Крош",
    lastName: "Крошевич",
    imageUrl: "/1.jpg",
  },
  {
    firstName: "Бараш",
    lastName: "Барашевич",
    imageUrl: "/2.jpg",
  },
  {
    firstName: "Ежик",
    lastName: "Ежикович",
    imageUrl: "/3.jpg",
  },
];

  return (
    <> 
      <Profile user = {my_profile[0]}/>
      <Profile user = {my_profile[1]}/>
      <Profile user = {my_profile[2]}/>
    </>
  )
}

export default App
