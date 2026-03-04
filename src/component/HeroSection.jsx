import React, { useState } from 'react'
import Banner from './Banner'
import CustomerTickets from './CustomerTickets'
import ticketsData from '../data/ticket-data.json';

function HeroSection() {
    const [tickets, setTickets] = useState(ticketsData);
    return (
        <section className='bg-gray-100 p-6 font-sans'>
            <div className='max-w-7xl mx-auto space-y-6'>
                <Banner tickets={tickets} />
                <CustomerTickets tickets={tickets} setTickets={setTickets} />
            </div>
        </section>
    )
}

export default HeroSection