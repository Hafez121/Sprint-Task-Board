import Board from './components/Board'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <div className="app-header">
        <div className="eyebrow">Lab / React</div>
        <h1>Sprint Task Board</h1>
        <p className="lede">
          Drag tasks between columns, add new ones, or clear them out. State persists
          locally so your board survives a refresh.
        </p>
      </div>
      <Board />
    </div>
  )
}
