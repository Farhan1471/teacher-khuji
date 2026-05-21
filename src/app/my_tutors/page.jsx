import { DeleteTutorModal } from "@/components/DeleteTutorModal";
import { getMyTutors } from "../lib/tutors/action";
import { UpdateUserModal } from "@/components/UpdateUserModal";

const myTutorsPage = async () => {
    const tutors = await getMyTutors();

    return (
        <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen pt-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl text-center font-bold text-gray-800 mb-2">
                        My Tutors
                    </h1>
                    
                </div>
                {tutors.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                        <p className="text-gray-600 text-lg mb-4">
                            You haven't added any tutors yet.
                        </p>
                        <a 
                            href="/add_tutor"
                            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Add Your First Tutor
                        </a>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-blue-600">
                                <tr>
                                    <th className="px-6 py-4 text-left font-bold text-white">Tutor Name</th>
                                    <th className="px-6 py-4 text-left font-bold text-white">Subject</th>
                                    <th className="px-6 py-4 text-left font-bold text-white">Available</th>
                                    <th className="px-6 py-4 text-left font-bold text-white">Hourly Fee</th>
                                    <th className="px-6 py-4 text-left font-bold text-white">Total Slot</th>
                                    <th className="px-6 py-4 text-left font-bold text-white">Session Start Date</th>
                                    <th className="px-6 py-4 text-center font-bold text-white">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {tutors.map((tutor) => (
                                    <tr key={tutor._id} className="hover:bg-blue-50 transition">
                                        <td className="px-6 py-4 text-gray-800 font-semibold">{tutor.name}</td>
                                        <td className="px-6 py-4 text-gray-600">{tutor.subject}</td>
                                        <td className="px-6 py-4 text-gray-600 text-sm">
                                            {tutor.availableDays} - {tutor.availableTime}
                                        </td>
                                        <td className="px-6 py-4 text-gray-800 font-semibold">TK {tutor.hourlyFee}</td>
                                        <td className="px-6 py-4">
                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                                                {tutor.totalSlot}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600 text-sm">
                                            {new Date(tutor.sessionStartDate).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <div className="flex justify-center gap-3">
                                                {/* <button className="text-red-500 hover:text-red-700 transition" title="Delete">
                                                    Delete
                                                </button>  */}
                                                <DeleteTutorModal tutorId={tutor._id} />
                                                {/* <button className="text-blue-500 hover:text-blue-700 transition" title="Edit">
                                                    Edit
                                                </button> */}
                                                <UpdateUserModal tutor={tutor} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}

export default myTutorsPage;