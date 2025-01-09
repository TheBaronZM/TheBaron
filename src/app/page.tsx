import ProductGrid from '@/components/product/ProductGrid'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Watch, Shield, Clock, Mail, Phone, MapPin } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative h-[90vh] flex items-center justify-center bg-[url('/hero-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Timeless Elegance,
            <br />
            Exceptional Craftsmanship
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Discover our curated collection of luxury timepieces
          </p>
          <a href="#collection" className="inline-flex items-center px-8 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors">
            Explore Collection
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Watch,
                title: 'Authentic Timepieces',
                description: 'Every watch in our collection is certified authentic',
              },
              {
                icon: Shield,
                title: 'Secure Purchase',
                description: 'Shop with confidence with our secure payment system',
              },
              {
                icon: Clock,
                title: 'Expert Service',
                description: '24/7 customer support for all your inquiries',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-gray-900" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Timepieces</h2>
          <ProductGrid />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">The Baron Legacy</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Trading in exceptional timepieces, THE BARON represents the pinnacle 
              of horological excellence. Each watch is a masterpiece of precision engineering
              and sophisticated design, carefully selected for the discerning collector.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-gray-600" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-600">info@thebaron.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-gray-600" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-600">+260 (974) 128 784</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-gray-600" />
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-gray-600">Avondale, LSK</p>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 