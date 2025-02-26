import Header from './components/Header/Header'
import AppRouter from './router'
import './styles/App.css'

function App() {

  return (
    <div className='h-screen'>
      <Header></Header>
      <div className='h-full bg-white'>
        <AppRouter></AppRouter>
      </div>

    </div>
  )
}

export default App
