import React from 'react'

function ResolvedTasks({ tickets }) {
    return (
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
    )
}

export default ResolvedTasks