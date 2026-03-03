import React from 'react'
import bannerImgInProgress from '../assets/vector1.png';

function Banner() {
    return (
        <div className="grid grid-cols-2 gap-5">
            {/* In-Progress Banner */}
            <div
                className="relative rounded-sm overflow-hidden p-8 flex flex-col items-center justify-center min-h-36"
                style={{ background: "linear-gradient(135deg, #632EE3 0%, #9F62F2 100%)" }}
            >
                {/* Left image - normal */}
                <img
                    src={bannerImgInProgress}
                    alt=""
                    className="absolute bottom-0 left-0 h-full object-contain pointer-events-none select-none"
                    style={{ opacity: 0.9 }}
                />
                {/* Right image - mirrored */}
                <img
                    src={bannerImgInProgress}
                    alt=""
                    className="absolute bottom-0 right-0 h-full object-contain pointer-events-none select-none"
                    style={{ opacity: 0.9, transform: 'scaleX(-1)' }}
                />

                <p className="text-purple-200 text-sm font-medium mb-1 relative z-10">In-Progress</p>
                <span className="text-white text-6xl font-bold relative z-10">0</span>
            </div>

            {/* Resolved Banner */}
            <div
                className="relative rounded-sm overflow-hidden p-8 flex flex-col items-center justify-center min-h-36"
                style={{ background: "linear-gradient(135deg, #54CF68 0%, #00827A 100%)" }}
            >
                {/* Left image - normal */}
                <img
                    src={bannerImgInProgress}
                    alt=""
                    className="absolute bottom-0 left-0 h-full object-contain pointer-events-none select-none"
                    style={{ opacity: 0.9 }}
                />
                {/* Right image - mirrored */}
                <img
                    src={bannerImgInProgress}
                    alt=""
                    className="absolute bottom-0 right-0 h-full object-contain pointer-events-none select-none"
                    style={{ opacity: 0.9, transform: 'scaleX(-1)' }}
                />

                <p className="text-emerald-100 text-sm font-medium mb-1 relative z-10">Resolved</p>
                <span className="text-white text-6xl font-bold relative z-10">0</span>
            </div>
        </div>
    )
}

export default Banner