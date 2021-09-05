import Contact from "./components/contact"
import Description from "./components/description"
import NavHeader from "./components/header-nav"
import BannerHome from "./components/home-banner"
import Products from "./components/products"

export default function Home() {
  return (
    <>
      <NavHeader />

      <main>
        <BannerHome />
        <Products />
        <Description />
      </main>

      <footer>
        <Contact />
      </footer>
    </>
  )
}
