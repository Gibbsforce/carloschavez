// chakra test
import { Box } from "@chakra-ui/react"
// Components
import Header from "./components/Header"
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Box color="primary">Hello world!</Box>} />
      </Routes>
    </Router>
  )
}
export default App