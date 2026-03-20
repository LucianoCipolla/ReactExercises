import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { App as Card } from "./Card"
import { MoodBoard } from "./MoodBoard" 
import { ToggleApp } from "./ToggleTextButton"
import { ColorPicker } from "./ColorPickerApp"  
import { FruitsSearch } from "./fruitSearchApp"

function App() {
  return (
    <div>
      <Navbar />
      <Card />
      <MoodBoard />
      <ToggleApp />
      <ColorPicker />
      <FruitsSearch />
      <Footer />
    </div>
  )
}

export default App