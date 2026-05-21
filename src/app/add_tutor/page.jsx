'use client';

import { useRouter } from 'next/navigation';
import { handleAddTutorAction } from "../lib/tutors/action";
import toast, { Toaster } from 'react-hot-toast';

const addTutorPage = () => {
    const router = useRouter();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        try {
            const result = await handleAddTutorAction(formData);
            if (result.success) {
                toast.success('Tutor added successfully!');
                setTimeout(() => router.push('/tutors'), 5000);
            } else {
                toast.error('Failed to add tutor');
            }
        } catch (error) {
            toast.error('Failed to add tutor');
        }
    };

    return (
        <div className="w-full from-blue-50 to-indigo-50 min-h-screen mb-16 pt-12 px-4">
            <Toaster position="top-right" />
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
                <div className="mb-8">
                    <h1 className="text-4xl text-center font-bold text-gray-800 mb-2">
                        Add a Tutor
                    </h1>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-700">Full Name</label>
                        <input name="name" type="text" placeholder="Enter your full name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-700">Email Address</label>
                        <input name="tutorEmail" type="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-700">Photo URL</label>
                        <input name="photo" type="url" placeholder="Enter your photo URL" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-700">Subject</label>
                        <select name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                            <option value="">Select a subject</option>
                            <option value="Bangla">Bangla</option>
                            <option value="English">English</option>
                            <option value="Biology">Biology</option>
                            <option value="Physics">Physics</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="Math">Math</option>
                            <option value="ICT">ICT</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-700">Available Days</label>
                        <input name="availableDays" type="text" placeholder="e.g., Sun - Thu" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-700">Available Time</label>
                        <input name="availableTime" type="text" placeholder="e.g., 5:00 PM - 8:00 PM" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-700">Hourly Fee</label>
                        <input name="hourlyFee" type="number" placeholder="Enter hourly fee" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-700">Total Slots Available</label>
                        <input name="totalSlot" type="number" placeholder="Enter total slots" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-700">Session Start Date</label>
                        <input name="sessionStartDate" type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-700">Institution</label>
                        <input name="institution" type="text" placeholder="e.g., University of Dhaka" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-700">Experience</label>
                        <input name="experience" type="text" placeholder="e.g., 8 years of teaching Higher Mathematics" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-700">Location</label>
                        <input name="location" type="text" placeholder="Enter your location" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-700">Teaching Mode</label>
                        <select name="teachingMode" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                            <option value="">Select a teaching mode</option>
                            <option value="online">Online</option>
                            <option value="offline">Offline</option>
                            <option value="both">Both</option>
                        </select>
                    </div>

                    <button 
                        type="submit"
                        className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                    >
                        Add Tutor
                    </button>
                </form>
            </div>
        </div>
    )
}

export default addTutorPage;