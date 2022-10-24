import { useState, useEffect } from "react"
import { Box, Grid } from "@chakra-ui/react"
import Card from "../../components/Card"
import dataTest from "../../utils/dataTest"
const Products = () => {
  const [data, setData] = useState(Array)
  useEffect(() => {
    setData(dataTest)
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