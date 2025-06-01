import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10">
            <ul className="flex justify-center items-center space-x-6 md:space-x-10">
                <li>
                    <a
                        href="/about-rukhsana"
                        className="text-white text-lg hover:text-yellow-400 transition-colors"
                    >
                        About Rukhsana
                    </a>
                </li>
                <li>
                    <a
                        href="/books"
                        className="text-white text-lg hover:text-yellow-400 transition-colors"
                    >
                        Books
                    </a>
                </li>
                <li>
                    <a
                        href="/booking-info"
                        className="text-white text-lg hover:text-yellow-400 transition-colors"
                    >
                        Booking Info
                    </a>
                </li>
                <li>
                    <a
                        href="/contact"
                        className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
