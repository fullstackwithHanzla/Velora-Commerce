import React from 'react'
import RelatedProductCard from './RelatedProductCard'
import RelatedLatestOffers from './RelatedLatestOffers'

const RelatedItems = ({product}) => {
  return (
    <>
      <RelatedProductCard product={product} />
        <RelatedLatestOffers/>
    </>
  )
}

export default RelatedItems