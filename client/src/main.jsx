import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// styles
import { ChakraProvider } from "@chakra-ui/react"
import { companyColors } from "./styles/theme"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={companyColors}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
