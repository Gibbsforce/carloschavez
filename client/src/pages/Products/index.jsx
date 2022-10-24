import { useState, useEffect } from "react"
import { Box, Grid } from "@chakra-ui/react"
import Card from "../../components/Card"
// API
import API from "../../API"
const Products = () => {
  const [data, setData] = useState(Array)
  useEffect(() => {
    const getProducts = async () => {
      try {
        const getProducts = await API.fetchGetProducts()
        const { message, products } = getProducts
        if (message === "OK") {
          setData(products)
        }
      } catch(error){
        console.log(error)
      }
    }
    getProducts()
  }, [])
  return (
    <Box
      maxW="1280px"
      m="0 auto"
      p="0 20px"
    >
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap="4">
        {data.map(
          (
            {
              product_name,
              product_description,
              product_price,
              product_price_discount,
              product_image,
            },
            key
          ) => (
              <Card
                key={key}
                product_name={product_name}
                product_description={product_description}
                product_price={product_price}
                product_price_discount={product_price_discount}
                product_image={product_image}
              />
          )
        )}
      </Grid>
    </Box>
  )
}
export default Products