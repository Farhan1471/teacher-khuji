"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import { authClient } from "@/app/lib/auth-client";
import toast from "react-hot-toast";


export function UpdateUserModal({ tutor }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(tutor || {});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

      const { data: jwtData } = await authClient.token();
      const token = jwtData?.token;
      
      if (!token) {
        throw new Error("You must be logged in to update a tutor");
      }
      
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/updatetutors/${tutor._id}`,
        {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to update tutor');
      }

      toast.success('Tutor updated successfully!');
      setIsOpen(false);
      router.refresh();
  };

  const handleClose = () => {
    setIsOpen(false);
    setFormData(tutor || {});
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-blue-500 hover:text-blue-700 transition font-semibold"
        title="Edit"
      >
        Edit
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Update Tutor Profile</h2>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-700 text-sm">Full Name</label>
            <input 
              name="name" 
              type="text" 
              placeholder="Enter your full name" 
              value={formData.name || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
              required 
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-700 text-sm">Email Address</label>
            <input 
              name="tutorEmail" 
              type="email" 
              placeholder="Enter your email" 
              value={formData.tutorEmail || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
              required 
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-700 text-sm">Photo URL</label>
            <input 
              name="photo" 
              type="url" 
              placeholder="Enter your photo URL" 
              value={formData.photo || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
              required 
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-700 text-sm">Subject</label>
            <select 
              name="subject" 
              value={formData.subject || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
              required
            >
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

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-700 text-sm">Available Days</label>
            <input 
              name="availableDays" 
              type="text" 
              placeholder="e.g., Sun - Thu" 
              value={formData.availableDays || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
              required 
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-700 text-sm">Available Time</label>
            <input 
              name="availableTime" 
              type="text" 
              placeholder="e.g., 5:00 PM - 8:00 PM" 
              value={formData.availableTime || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
              required 
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-700 text-sm">Hourly Fee</label>
            <input 
              name="hourlyFee" 
              type="number" 
              placeholder="Enter hourly fee" 
              value={formData.hourlyFee || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
              required 
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-700 text-sm">Total Slots Available</label>
            <input 
              name="totalSlot" 
              type="number" 
              placeholder="Enter total slots" 
              value={formData.totalSlot || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
              required 
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-700 text-sm">Session Start Date</label>
            <input 
              name="sessionStartDate" 
              type="date" 
              value={formData.sessionStartDate || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
              required 
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-700 text-sm">Institution</label>
            <input 
              name="institution" 
              type="text" 
              placeholder="e.g., University of Dhaka" 
              value={formData.institution || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
              required 
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-700 text-sm">Experience</label>
            <input 
              name="experience" 
              type="text" 
              placeholder="e.g., 8 years of teaching Higher Mathematics" 
              value={formData.experience || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
              required 
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-700 text-sm">Location</label>
            <input 
              name="location" 
              type="text" 
              placeholder="Enter your location" 
              value={formData.location || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
              required 
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-700 text-sm">Teaching Mode</label>
            <select 
              name="teachingMode" 
              value={formData.teachingMode || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
              required
            >
              <option value="">Select a teaching mode</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
              <option value="both">Both</option>
            </select>
          </div>

          <div className="flex gap-3 mt-6">
            <button 
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Updating...' : 'Update Tutor'}
            </button>
            <button
              type="button"
              onClick={handleClose}
              disabled={isLoading}
              className="flex-1 bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-400 transition cursor-pointer disabled:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </form>
          </div>
        </div>
      )}
    </>
  );
}