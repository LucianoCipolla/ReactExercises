import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { App as Card } from "./Card"
import { MoodBoard } from "./MoodBoard" 
import { ToggleApp } from "./ToggleTextButton"

function App() {
  return (
    <div>
      <Navbar />
      <Card />
      <MoodBoard />
      <ToggleApp />
      <Footer />
    </div>
  )
}

export default App