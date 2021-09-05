import Contact from "./components/contact"
import Description from "./components/description"
import NavHeader from "./components/header-nav"
import BannerHome from "./components/home-banner"
import Products from "./components/products"
import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>ABC Oxigênio</title>
      </Head>
      <NavHeader />

      <main>
        <BannerHome />
        <Products />
        <Description />
      </main>

      <footer>
        <Contact />
      </footer>
    </div>
  )
}
