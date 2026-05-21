export const fetchTutors = async ({ searchTerm = "", startDate = "", endDate = "" } = {}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors`);
  const tutors = (await res.json()) || [];

  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const start = startDate ? new Date(`${startDate}T00:00:00`) : null;
  const end = endDate ? new Date(`${endDate}T23:59:59.999`) : null;

  return tutors.filter((tutor) => {
    const nameMatches =
      !normalizedSearchTerm ||
      tutor.name?.toLowerCase().includes(normalizedSearchTerm) ||
      tutor.subject?.toLowerCase().includes(normalizedSearchTerm);

    const tutorDate = tutor.sessionStartDate ? new Date(tutor.sessionStartDate) : null;
    const startsInRange = !start || (tutorDate && tutorDate >= start);
    const endsInRange = !end || (tutorDate && tutorDate <= end);

    return nameMatches && startsInRange && endsInRange;
  });
};

export const fetchAvailableTutors = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/availabletutors`);
    const data = await res.json();
    return data || [];
};


