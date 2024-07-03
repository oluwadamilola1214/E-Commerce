import Hero from "../../components/Hero/Hero"
import NewCollections from "../../components/NewCollection/NewCollections"
import NewsLetter from "../../components/Newletter/NewsLetter"
import Offers from "../../components/Offers/Offers"
import Popular from "../../components/Popular/Popular"


const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
     <NewCollections/>
     <NewsLetter/>
    </div>
  )
}

export default Shop