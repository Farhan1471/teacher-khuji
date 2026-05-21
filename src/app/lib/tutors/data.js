export const fetchTutors = async (searchTerm = "") => {
  const url = searchTerm
    ? `${process.env.NEXT_PUBLIC_API_URL}/tutors/search?name=${encodeURIComponent(searchTerm)}`
    : `${process.env.NEXT_PUBLIC_API_URL}/tutors`;

  const res = await fetch(url);
  return (await res.json()) || [];
};

export const fetchAvailableTutors = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/availabletutors`);
    const data = await res.json();
    return data || [];
};


