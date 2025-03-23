import Link from 'next/link'
import { Button } from '../ui/button'
import HeroCarousel from './HeroCarousel'

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-xl font-bold text-2xl tracking-tight sm:text-4xl">
          Discover & Shop from Top Vendors – All in One Place!
        </h1>
        <p className="max-w-xl mt-8 text-lg leading-8 text-muted-foreground">
          Explore a seamless shopping experience with our AI-powered
          multi-vendor marketplace. Find exclusive deals, shop from trusted
          vendors, and enjoy secure payments—all in one platform. Start browsing
          today!
        </p>
        <Button size="lg" className="mt-8">
          <Link href="/products">Shop Now</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  )
}
export default Hero
