import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { App as Card } from "./Card"
import { MoodBoard } from "./MoodBoard" 
import { ToggleApp } from "./ToggleTextButton"
import { ColorPicker } from "./ColorPickerApp"  
import { FruitsSearch } from "./fruitSearchApp"
import { OTPGenerator } from "./OtpGeneratorApp"
import { SuperheroForm } from "./SuperHeroApplicationForm"
import { EventRSVPForm } from "./RSVPForm"
import { ShoppingList } from "./ShoppingList"

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
      <SuperheroForm />
      <EventRSVPForm />
      <ShoppingList />
      <Footer />
    </div>
  )
}

export default App