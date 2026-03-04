import React from 'react'

function StatusBadge({status}) {
    return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${status === "Open" ? "bg-green-100 text-green-800" : status === "In-Progress" ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800"}`}>
            <span className={`w-3 h-3 rounded-full ${status === "Open" ? "bg-green-500" : status === "In-Progress" ? "bg-yellow-500" : "bg-blue-500"}`} />
            {status}
        </span>
    )
}

export default StatusBadge