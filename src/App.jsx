import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import './App.css'

function App() {
 
  return (
    <>
      <Navbar />
      <Hero />
      <Card 
        img='sports.png'
        rating='5.0'
        reviewCount={6}
        country='USA'
        tittle='Life lessons with Katie Zafer'
        price={136}

      />

      <Card 
        img='sports.png'
        rating='5.0'
        reviewCount={6}
        country='USA'
        tittle='Life lessons with Katie Zafer'
        price={136}

      />
      <Card 
        img='sports.png'
        rating='5.0'
        reviewCount={6}
        country='USA'
        tittle='Life lessons with Katie Zafer'
        price={136}

      />
      <Card 
        img='sports.png'
        rating='5.0'
        reviewCount={6}
        country='USA'
        tittle='Life lessons with Katie Zafer'
        price={136}

      />

    </>

  )
}

export default App
