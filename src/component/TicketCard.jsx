import React from 'react'

function TicketCard() {
    return (
        <div
            className="bg-white rounded-xl border border-gray-200 p-4 cursor-pointer hover:shadow-md hover:border-purple-300 transition-all duration-200 group"
        >
            <div className="flex justify-between items-start gap-2 mb-2">
                <h3 className="text-sm font-bold text-gray-800 group-hover:text-purple-700 transition-colors leading-snug">
                    Login Issues - Can't Access Account
                </h3>
                {/* <StatusBadge status={ticket.status} /> */}
            </div>
            <p className="text-xs text-gray-500 mb-3 leading-relaxed line-clamp-2">Customer is unable to log in to their account. They've tried resetting their password multiple times but still cannot gain access.</p>
            <div className="flex items-center justify-between">
                <span className={`text-xs font-bold text-red-500`}>HIGH PRIORITY</span>
                <span className="text-xs text-gray-400 font-medium bg-gray-50 px-2 py-0.5 rounded">#1001</span>
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                <span className="text-xs text-gray-500 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    John Smith
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    2024-01-15
                </span>
            </div>
        </div>
    )
}

export default TicketCard