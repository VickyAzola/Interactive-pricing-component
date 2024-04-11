import './App.css'
import TheFooter from './components/TheFooter'
import TheHeader from './components/TheHeader'
import TheForm from './components/TheForm'

function App() {

  const list = [
    {id: 0, text: 'Unlimited websites'},
    {id: 1, text: '100% data ownership'},
    {id: 2, text: 'Email reports'},
  ]

  return (
    <>
      <TheHeader />
      <main>
        <TheForm />
        <div className='bottom-section'>
          <ul>
            {list.map(item => 
              <li key={item.id}><img src='/images/icon-check.svg' alt=""/>{item.text}</li>
              )
            }
          </ul>
          <button>Start my trial</button>
        </div>
      </main>
      <TheFooter />
    </>
  )
}

export default App
