import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import './App.css'
import Data from './Data'

function App() {
  const cards = Data.map( item =>{
    return(
      <Card 
      key={item.id}   
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      />
    )
   })

 
  return (
    <>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </>
  )
}

export default App
