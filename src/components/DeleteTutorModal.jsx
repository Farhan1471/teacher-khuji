"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertDialog, Button } from "@heroui/react";
import { authClient } from "@/app/lib/auth-client";

export function DeleteTutorModal({ tutorId }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteTutor = async () => {
    setIsLoading(true);


      const { data: jwtData } = await authClient.token();
      const token = jwtData?.token;
      
      if (!token) {
        throw new Error("You must be logged in to delete a tutor");
      }
      
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tutors/${tutorId}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to delete tutor');
      }

      setIsOpen(false);
      router.refresh();
  };

  return (
    <AlertDialog isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button variant="danger">Delete Tutor</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete tutor?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will delete thus tutor. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button 
                slot="close" 
                variant="tertiary"
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button 
                slot="close" 
                variant="danger"
                onPress={handleDeleteTutor}
                isLoading={isLoading}
              >
                Delete Tutor
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}