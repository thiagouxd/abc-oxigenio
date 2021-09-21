import Contact from "./components/contact"
import Description from "./components/description"
import NavHeader from "./components/header-nav"
import BannerHome from "./components/home-banner"
import Products from "./components/products"

const contactPhone = '(67) 98989-8989'

export default function Home() {
  return (
    <>
      <NavHeader />

      <main>
        <BannerHome phone={contactPhone} />
        <Products phone={contactPhone} />
        <Description />
      </main>

      <footer>
        <Contact phone={contactPhone} />
      </footer>
    </>
  )
}
