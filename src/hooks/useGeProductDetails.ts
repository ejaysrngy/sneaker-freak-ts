import React, { useMemo } from "react";

import { shoesDB } from "utils/enums";

interface ProductType {
  color: string;
  image_url: string;
  product_id: Number;
  shoe_name: string;
}

const useGetProductDetails = (productId: Number | string): ProductType | undefined => {
  const productDetails = useMemo(() => {
    const filteredItem = shoesDB.filter((item): any => {
      return item.product_id === productId
    });

  return filteredItem[0]

  }, [productId]);

  if (productDetails) return productDetails
  else return
};

export default useGetProductDetails;
