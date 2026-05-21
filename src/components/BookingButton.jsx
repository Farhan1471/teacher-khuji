"use client"
import { authClient, useSession } from '@/app/lib/auth-client';
import { Button, Modal, Input, Label, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function BookingButton ({ tutor })  {
    const {data: session} = useSession();
    const router = useRouter();
    const [phone, setPhone] = useState('');

    console.log("Session structure:", session);

    const handleConfirmBooking = async () => {
        if (!phone.trim()) {
            toast.error("Please enter your phone number");
            return;
        }

        if (!tutor?.totalSlot || tutor.totalSlot <= 0) {
            toast.error("No available slots left.");
            return;
        }

        const {data: jwtData} = await authClient.token();
        const token = jwtData?.token;
        if (!token) {
            toast.error("You must be logged in to book a session.");
            return;
        }

        const updatedData = {
            studentId: session?.user?.id,
            studentName: session?.user?.name,
            studentEmail: session?.user?.email,
            studentPhone: phone,
            tutorData: tutor,
            tutorId: tutor._id,
        };

        console.log("Sending booking data:", updatedData);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/${tutor._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(updatedData),
            });
            const data = await res.json();
            if(!data){
                toast.error("Failed to book the session. Please try again.");
                return;
            }

            toast.success("Booking confirmed!");
            setPhone('');
            router.push('/my_booked_session');
        } catch (error) {
            console.error("Booking error:", error);
            toast.error("An error occurred. Please try again.");
        }
    }

    return(
        <Modal>
            <Button
                color="primary"
                size="lg"
                className="w-full font-bold shadow-lg mt-4"
                disabled={!tutor?.totalSlot || tutor.totalSlot <= 0}
            >
                Book Now
            </Button>

            {(!tutor?.totalSlot || tutor.totalSlot <= 0) && (
                <p className="text-red-500 text-sm mt-2 text-center">
                    No available slots left
                </p>
            )}

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Confirm Your Booking</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <div className="flex flex-col gap-4">
                                <TextField className="w-full" variant="secondary">
                                    <Label>Student Name</Label>
                                    <Input 
                                        value={session?.user?.name || ''} 
                                        readOnly 
                                        disabled
                                    />
                                </TextField>

                                <TextField className="w-full" variant="secondary">
                                    <Label>Phone</Label>
                                    <Input 
                                        placeholder="Enter your phone number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </TextField>

                                <TextField className="w-full" variant="secondary">
                                    <Label>Tutor ID</Label>
                                    <Input 
                                        value={tutor?._id || ''} 
                                        readOnly 
                                        disabled
                                    />
                                </TextField>
                       
                                <TextField className="w-full" variant="secondary">
                                    <Label>Tutor Name</Label>
                                    <Input 
                                        value={tutor?.name || ''} 
                                        readOnly 
                                        disabled
                                    />
                                </TextField>

                                <TextField className="w-full" variant="secondary">
                                    <Label>Student Email</Label>
                                    <Input 
                                        value={session?.user?.email || ''} 
                                        readOnly 
                                        disabled
                                    />
                                </TextField>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button 
                                slot="close" 
                                variant="secondary"
                            >
                                Cancel
                            </Button>
                            <Button 
                                slot="close"
                                color="primary"
                                onPress={handleConfirmBooking}
                            >
                                Confirm Booking
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    )
}
