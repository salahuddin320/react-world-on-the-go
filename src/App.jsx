
import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/countries'


const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {

  return (
    <>
      <h1>React world on the go</h1>
      <Suspense fallback={<h2>React vai is Loading...</h2>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
