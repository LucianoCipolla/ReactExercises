import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { App as Card } from "./Card"
import { MoodBoard } from "./MoodBoard" 
import { ToggleApp } from "./ToggleTextButton"
import { ColorPicker } from "./ColorPickerApp"  
import { FruitsSearch } from "./fruitSearchApp"
import { OTPGenerator } from "./OtpGeneratorApp"

function App() {
  return (
    <div>
      <Navbar />
      <Card />
      <MoodBoard />
      <ToggleApp />
      <ColorPicker />
      <FruitsSearch />
      <OTPGenerator />
      <Footer />
    </div>
  )
}

export default App