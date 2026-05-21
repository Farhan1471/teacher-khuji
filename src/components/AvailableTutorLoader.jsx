"use client";

import { ClipLoader } from "react-spinners";

const AvailableTutorLoader = () => {
    return (
        <div className="flex min-h-90 items-center justify-center rounded-4xl border border-slate-200 bg-white/80 px-6 py-16 shadow-sm">
            <div className="flex flex-col items-center gap-4 text-center">
                <ClipLoader
                    size={48}
                    color="#2563eb"
                    loading
                />
                <p className="text-sm font-medium text-slate-500">
                    Loading available tutors...
                </p>
            </div>
        </div>
    );
};

export default AvailableTutorLoader;