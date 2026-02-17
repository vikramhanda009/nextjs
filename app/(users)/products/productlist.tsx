'use client'

import { useSearchParams } from 'next/navigation'

const ProductList = () => {
  const searchParams = useSearchParams() // ✅ CALL THE HOOK

  const category = searchParams.get('category') || 'all'
  const sort = searchParams.get('sort') || 'all'
  const page = Number(searchParams.get('page')) || 1

  return (
    <div>
      <p>Category: {category}</p>
      <p>Sort: {sort}</p>
      <p>Page: {page}</p>
    </div>
  )
}

export default ProductList
