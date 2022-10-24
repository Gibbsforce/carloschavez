// pages
import Products from "./pages/products"
// Components
import Header from "./components/Header"
import Footer from "./components/Footer"
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer/>
    </Router>
  )
}
export default App