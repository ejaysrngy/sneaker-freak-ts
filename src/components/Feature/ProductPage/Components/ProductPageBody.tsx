import useGetProductDetails from "hooks/useGeProductDetails"

import { useParams } from "react-router"

const ProductPageBody = (): null => {
    const {productId} = useParams() as { productId: string }
    const product = useGetProductDetails(parseInt(productId!))

    return null
}

export default ProductPageBody