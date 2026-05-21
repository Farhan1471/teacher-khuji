'use server';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { auth } from "../auth";

export const addTutor = async (formData) => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    const userEmail = session?.user?.email;

    const modifiedData = Object.fromEntries(formData.entries());
    modifiedData.addedBy = userEmail;
    console.log("Sending tutor data:", modifiedData);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.token}`,
      },
      body: JSON.stringify(modifiedData),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("API error response:", errorData);
      return null;
    }

    const data = await res.json();
    console.log("Tutor added successfully:", data);
    return data;
  } catch (error) {
    console.error("Error in addTutor:", error);
    return null;
  }
};

export const handleAddTutorAction = async (formData) => {
  try {
    const data = await addTutor(formData);
    return { success: !!data?.insertedId, data };
  } catch (error) {
    console.error("Error in handleAddTutorAction:", error);
    return { success: false, error: error.message };
  }
};

export const getMyTutors = async () => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    const { token } = await auth.api.getToken({
      headers: await headers(),
    });

    const userEmail = session?.user?.email;
    if (!token || !userEmail) {
      return [];
    }  

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/addedBy/${userEmail}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.error("Failed to fetch tutors");
      return [];
    }

    const tutors = await res.json();
    return tutors;
  } catch (error) {
    console.error("Error fetching my tutors:", error);
    return [];
  }
};