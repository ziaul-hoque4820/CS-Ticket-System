import React, { useState } from 'react'
import TicketCard from './TicketCard'
import ticketsData from '../data/ticket-data.json';
import Swal from 'sweetalert2';

function CustomerTickets({ setInProgress, setResolved }) {
    const [tickets, setTickets] = useState(ticketsData);


    const handleUpdateTaskStatus = (ticketId, event) => {
        event.stopPropagation();
        console.log("Ticket ID:", ticketId);

        // update ticket status to In-Progress
        setTickets(prev => prev.map(ticket =>
            ticket.id === ticketId
                ? { ...ticket, status: "In-Progress" }
                : ticket
        ));

        setInProgress(prev => prev + 1);

        // show sweetAlert
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Ticket moved to In-Progress 🚀",
            text: "Status updated successfully",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            backdrop: `
            rgba(0,0,0,0.4)
        `,
            showClass: {
                popup: "animate__animated animate__zoomIn"
            },
            hideClass: {
                popup: "animate__animated animate__zoomOut"
            }
        });
    }

    return (
        <div className="flex flex-col lg:flex-row gap-5">

            {/* LEFT — Ticket Cards */}
            <div className="flex-[2.2] min-w-0">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Tickets</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {
                        tickets.map(ticket => {
                            if (ticket.status === "Open" || ticket.status === "In-Progress") {
                                return <TicketCard handleUpdateTaskStatus={handleUpdateTaskStatus} key={ticket.id} ticket={ticket} />
                            }
                        })
                    }
                </div>
            </div>

            {/* RIGHT — Task & Resolved Status */}
            <div className="flex-[1] min-w-0">
                {/* Task Status */}
                <div className='mb-10'>
                    <h2 className="text-xl font-bold text-gray-800 mb-1">Task Status</h2>
                    <p className="text-xs text-gray-400 mb-4">Select a ticket to add to Task Status</p>

                    {tickets.length === 0 ? (
                        <p className="text-xs text-gray-400">No tasks in progress.</p>
                    ) : (
                        <div className="flex flex-col gap-3">
                            {tickets.filter(ticket => ticket.status === "In-Progress").map(ticket => (
                                <div key={ticket.id} className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">

                                    {/* Top: Badge */}
                                    <span className="text-xs font-semibold text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">
                                        ● In-Progress
                                    </span>

                                    {/* Title */}
                                    <p className="text-sm font-semibold text-gray-800 mt-2 mb-3">
                                        {ticket.title}
                                    </p>

                                    {/* Complete Button */}
                                    <button
                                        className="w-full text-sm font-medium text-white bg-green-500 hover:bg-green-600 rounded-lg py-2 transition-colors"
                                    >
                                        ✓ Mark as Complete
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>


                {/* Resolved Tasks */}
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-1">Resolved Task</h2>
                    <p className="text-xs text-gray-400 mb-4">No resolved tasks yet.</p>

                    {tickets.length === 0 ? (
                        <p className="text-xs text-gray-400">No resolved tasks yet.</p>
                    ) : (
                        <div className="flex flex-col gap-3">
                            {tickets.filter(ticket => ticket.status === "Resolved").map(ticket => (
                                <div key={ticket.id} className="border border-green-200 rounded-xl p-4 bg-green-50">

                                    {/* Top: Badge */}
                                    <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">
                                        ✓ Resolved
                                    </span>

                                    {/* Title */}
                                    <p className="text-sm font-semibold text-gray-800 mt-2">
                                        {ticket.title}
                                    </p>

                                    {/* Ticket ID + Date */}
                                    <div className="flex justify-between mt-2">
                                        <span className="text-xs text-gray-400">{ticket.id}</span>
                                        <span className="text-xs text-gray-400">{ticket.createdAt}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CustomerTickets