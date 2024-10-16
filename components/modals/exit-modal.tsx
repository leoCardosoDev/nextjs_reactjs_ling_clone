"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useExitModal } from "@/store/use-exit-modal";

export const ExitModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useExitModal();
  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-full">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image src="/mascot_sad.svg" width={80} height={80} alt="mascote" />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            Espere, não desista!
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Você está prestes a sair da aula. Tem certeza?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              className="w-full"
              variant="primary"
              size="lg"
              onClick={close}
            >
              Continue Aprendendo
            </Button>

            <Button
              className="w-full"
              variant="dangerOutline"
              size="lg"
              onClick={() => {
                close();
                router.push("/learn");
              }}
            >
              Encerrar aula
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
