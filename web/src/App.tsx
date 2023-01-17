import Habit from "./components/Habit"
import './components/styles/global.css'

function App() {

  return (
    <div>
      <Habit completed={3}></Habit>
      <Habit completed={4}></Habit>
      <Habit completed={5}></Habit>
      <Habit completed={10}></Habit>
      <Habit completed={13}></Habit>
    </div>
  )
}

export default App
