import React, { useState } from 'react'
import Banner from './Banner'
import CustomerTickets from './CustomerTickets'

function HeroSection() {
    const [inProgress, setInProgress] = useState(0);
    const [resolved, setResolved] = useState(0);
    return (
        <section className='bg-gray-100 p-6 font-sans'>
            <div className='max-w-7xl mx-auto space-y-6'>
                <Banner inProgress={inProgress} resolved={resolved} />
                <CustomerTickets setInProgress={setInProgress} setResolved={setResolved} />
            </div>
        </section>
    )
}

export default HeroSection