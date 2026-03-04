import React from 'react'
import StatusBadge from './StatusBadge'

function TaskStatus({ tickets, handleComplete }) {
    return (
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
                            <StatusBadge status={ticket.status} />

                            {/* Title */}
                            <p className="text-sm font-semibold text-gray-800 mt-2 mb-3">
                                {ticket.title}
                            </p>

                            {/* Complete Button */}
                            <button
                                onClick={() => handleComplete(ticket.id)}
                                className="w-full text-sm font-medium text-white bg-green-500 hover:bg-green-600 rounded-lg py-2 transition-colors"
                            >
                                ✓ Mark as Complete
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default TaskStatus