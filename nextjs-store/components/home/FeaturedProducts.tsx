import { fetchFeaturedProducts } from '@/utils/actions'
import EmptyList from '../global/EmptyList'
import SectionTitle from '../global/SectionTitle'
import ProductsGrid from '../products/ProductsGrid'

async function FeaturedProducts() {
  const products = await fetchFeaturedProducts()
  if (products.length === 0)
    return <EmptyList heading="No Feature Products Found" />
  return (
    <section className="pt-24">
      <SectionTitle text="Featured Product" />
      <ProductsGrid products={products} />
    </section>
  )
}
export default FeaturedProducts
