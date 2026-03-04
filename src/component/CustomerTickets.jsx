import React, { useState } from 'react'
import TicketCard from './TicketCard'

import Swal from 'sweetalert2';
import TaskStatus from './TaskStatus';
import ResolvedTasks from './ResolvedTasks';

function CustomerTickets({ tickets, setTickets }) {

    const handleUpdateTaskStatus = (ticketId, event) => {
        event.stopPropagation();
        console.log("Ticket ID:", ticketId);

        // update ticket status to In-Progress
        setTickets(prev => prev.map(ticket =>
            ticket.id === ticketId
                ? { ...ticket, status: "In-Progress" }
                : ticket
        ));

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

    const handleComplete = (ticketId) => {
        // update ticket status to Resolved
        setTickets(prev => prev.map(ticket =>
            ticket.id === ticketId
                ? { ...ticket, status: "Resolved" }
                : ticket
        ));

        // show sweetAlert
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Ticket Resolved ✅",
            text: "The issue has been successfully completed.",
            showConfirmButton: false,
            timer: 1600,
            timerProgressBar: true,
            backdrop: "rgba(0,0,0,0.4)",
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
                <TaskStatus tickets={tickets} handleComplete={handleComplete} />
                <ResolvedTasks tickets={tickets} />
            </div>
        </div>
    )
}

export default CustomerTickets