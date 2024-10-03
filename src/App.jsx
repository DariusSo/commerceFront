import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavbarWithMegaMenu } from './components/Navbar'
import { FooterWithSitemap} from './components/Footer'
import { DefaultSidebar } from './components/Sidebar'
import { ImagePlacehoderSkeleton } from './components/ImageSkeleton'
import { CarouselDefault } from './components/Carousel'
import { EcommerceCard } from './components/ProductCard'
import ProductsList from './components/ProductList'
import CartModal from './components/CartModal'
import Deletethis from './components/deletethis'


function App() {
  const [count, setCount] = useState(0)
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <>
      <NavbarWithMegaMenu loggedIn={loggedIn}/>
      <CarouselDefault/>
      <ProductsList/>
      <CartModal/>
      <Deletethis/>
      <FooterWithSitemap/>
    </>
  )
}

export default App
