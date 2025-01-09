import Link from 'next/link'
import { ShoppingCart, Menu, Search } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            THE BARON
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="hover:text-gray-600">
              Collections
            </Link>
            <Link href="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-600">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search size={20} />
            </button>
            <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart size={20} />
            </Link>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 