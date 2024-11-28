import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <>
            <header className="bg-green-600 text-white p-4 sticky top-0">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">
                        Adels  Recipe Finder
                    </h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <Link className="hover:underline" href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:underline" href="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:underline" href="/contact-us">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:underline" href="/search">
                                    search
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
