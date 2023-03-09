import useGetProductDetails from "hooks/useGeProductDetails"

import { useParams } from "react-router"

const ProductPageBody = () => {
    const {productId} = useParams() as { productId: string }
    const product = useGetProductDetails(parseInt(productId!))

    console.log(product)

    return <div style={{height: '100%', margin: "5em 0 4em 0", padding: "0 15em"}}>
        <div style={{margin: "0 0 1em 0"}}>
            {/* breadcrumb trail */}
        </div>
        <div style={{display: "flex", width: "100%"}}>
            {/* product; image, details*/}
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <img src={product?.image_url} alt={product?.shoe_name} style={{height: "30rem", width: "30rem", objectFit: "cover"}}/>
            </div>
            <div style={{padding: "1em 3em", display: "flex", flexDirection: "column", gap: "1em"}}>
                {/* product details container; name, details, sizes */}
                <div>
                    {product?.shoe_name}
                </div>
                <div>
                    {/* product description */}
                </div>
                <div>
                    {/* product details */}
                </div>
                <div>
                    {product?.color}
                </div>
            </div>
        </div>
    </div>
}

export default ProductPageBody