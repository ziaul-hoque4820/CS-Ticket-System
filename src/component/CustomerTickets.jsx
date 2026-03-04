import React from 'react'
import TicketCard from './TicketCard'
import tickets from '../data/ticket-data.json';

function CustomerTickets() {

    return (
        <div className="flex flex-col lg:flex-row gap-5">

            {/* LEFT — Ticket Cards */}
            <div className="flex-[2.2] min-w-0">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Tickets</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {
                        tickets.map(ticket => <TicketCard key={ticket.id} ticket={ticket} />)
                    }
                </div>
            </div>

            {/* RIGHT — Task & Resolved Status */}
            <div className="flex-[1] min-w-0">
                {/* Task Status */}
                <div className='mb-10'>
                    <h2 className="text-xl font-bold text-gray-800 mb-1">Task Status</h2>
                    <p className="text-xs text-gray-400 mb-4">Select a ticket to add to Task Status</p>
                </div>


                {/* Resolved Tasks */}
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-1">Resolved Task</h2>
                    <p className="text-xs text-gray-400">No resolved tasks yet.</p>
                </div>
            </div>
        </div>
    )
}

export default CustomerTickets