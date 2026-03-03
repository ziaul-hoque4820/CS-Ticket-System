import React from 'react'
import Banner from './Banner'
import CustomerTickets from './CustomerTickets'

function HeroSection() {
    return (
        <section className='bg-gray-100 p-6 font-sans'>
            <div className='max-w-7xl mx-auto space-y-6'>
                <Banner />
                <CustomerTickets />
            </div>
        </section>
    )
}

export default HeroSection