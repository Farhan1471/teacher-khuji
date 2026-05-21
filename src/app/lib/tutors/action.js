'use server';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { auth } from "../auth";

export const addTutor = async (formData) => {
  try {
    const { token } = await auth.api.getToken({
      headers: await headers(),
    });

    const modifiedData = Object.fromEntries(formData.entries());
    console.log("Sending tutor data:", modifiedData);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
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

    if (data?.insertedId) {
      redirect("/tutors");
    } else {
      throw new Error("Failed to add tutor");
    }
  } catch (error) {
    console.error("Error in handleAddTutorAction:", error);
    throw error;
  }
};

export const getMyTutors = async () => {
  try {
    const { token } = await auth.api.getToken({
      headers: await headers(),
    });

    if (!token) {
      return [];
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors`, {
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