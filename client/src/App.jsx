// chakra test
import { Box } from "@chakra-ui/react"
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Box color="primary">Hello world!</Box>} />
      </Routes>
    </Router>
  )
}
export default App