import react from "react";
import { auth } from "../lib/auth";
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@heroui/react";

export default async function MyBookedSessionPage() {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings/${session?.user?.id}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    const bookings = await res.json();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-20 mt-4 text-center">My Booked Sessions</h1>

            {bookings && bookings.length > 0 ? (
                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-blue-600">
                            <tr>
                                <th className="px-6 py-4 text-left font-bold text-white">Tutor</th>
                                <th className="px-6 py-4 text-left font-bold text-white">Student</th>
                                <th className="px-6 py-4 text-left font-bold text-white">Email</th>
                                <th className="px-6 py-4 text-left font-bold text-white">Status</th>
                                <th className="px-6 py-4 text-center font-bold text-white">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {bookings.map((booking) => (
                                <tr key={booking._id} className="hover:bg-blue-50 transition">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded overflow-hidden bg-gray-100 flex-shrink-0">
                                                {booking.tutorData?.photo ? (
                                                    <Image src={booking.tutorData.photo} alt={booking.tutorData.name || 'Tutor'} width={48} height={48} className="object-cover" unoptimized />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">No Image</div>
                                                )}
                                            </div>
                                            <div>
                                                <div className="text-sm font-semibold text-gray-900">{booking.tutorData?.name}</div>
                                                <div className="text-xs text-gray-500">{booking.tutorData?.subject}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{booking.studentName}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{booking.studentEmail}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${booking.status === 'cancelled' ? 'bg-gray-100 text-gray-700' : 'bg-green-100 text-green-800'}`}>
                                            {booking.status === 'cancelled' ? 'Cancelled' : 'Active'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <Button color="danger" size="sm">Cancel</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg mb-4">You haven't booked any sessions yet</p>
                    <Link href="/tutors">
                        <Button color="primary">Browse Tutors</Button>
                    </Link>
                </div>
            )}
        </div>
    );
}