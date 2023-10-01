import React from 'react';
import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <div className="logo">
                <Link href="/">Logo</Link>
            </div>
            <nav>
                <ul className='header-items'>
                    <li className='header-item'><Link href="/">Home</Link></li>
                    <li className='header-item'><Link href="/about">About</Link></li>
                    <li className='header-item'><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

