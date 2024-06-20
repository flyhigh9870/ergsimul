import './App.css'
import './layouts/Sidebar'
import Sidebar from './layouts/Sidebar'
function App() {

  return (
    <div>
    <Sidebar />
    <div className="content">
      <h1>Hello World</h1>
      <p>나중에 기본 페이지는 시뮬레이터로 변경 예정</p>
    </div>
  </div>
  )
}

export default App
