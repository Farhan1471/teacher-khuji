import { Button, Chip } from "@heroui/react";
import { BookOpen, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TutorsCard = ({ tutor }) => {
    const { _id, name, photo, subject, institution, hourlyFee, location } = tutor;
    return (
        <div
            className="group flex flex-col bg-white rounded-4xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <div className="relative overflow-hidden aspect-16/10">
                <Image
                    alt="Tutor Image"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    src={photo || "No Photo Available"}

                    fill
                    unoptimized
                />
                <div className="absolute top-4 right-4">
                    <Chip
                        color="primary"
                        variant="solid"
                        className="font-bold shadow-lg shadow-blue-600/20"
                    >
                        {subject}
                    </Chip>
                </div>
            </div>
            <div className="p-8 flex flex-col grow space-y-4">
                <div className="space-y-2">
                        <h3 className="text-xl font-bold leading-tight line-clamp-2 hover:text-blue-600 transition-colors">
                            {name}
                        </h3>
                    <p className="text-sm text-slate-500 font-medium flex items-center gap-1">
                        From <span className="text-slate-900">{institution}</span>
                    </p>
                </div>

                <div className="pt-6 mt-auto border-t border-slate-100 w-full">
                    <Link href={`/tutors/${_id}`} className="w-full block">
                        <Button
                            variant="solid"
                            color="primary"
                            className="font-bold rounded-xl py-3 w-full bg-blue-600 text-white hover:bg-blue-700"
                        >
                            Book Session
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TutorsCard;