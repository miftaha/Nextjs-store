// import { LucideShoppingCar } from 'lucide-react'
import { LuShoppingCart } from 'react-icons/lu'
import { Button } from '../ui/button'
import Link from 'next/link'

async function CartButton() {
  const numItemInCart = 8
  return (
    <Button
      size="icon"
      variant="outline"
      asChild
      className="flex items-center justify-center relative"
    >
      <Link href="/cart">
        <LuShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {numItemInCart}
        </span>
      </Link>
    </Button>
  )
}
export default CartButton
