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
import { useHeartsModal } from "@/store/use-hearts-modal";

export const HeartsModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useHeartsModal();
  useEffect(() => setIsClient(true), []);
  const onClick = () => {
    close();
    router.push("/store");
  };
  if (!isClient) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-full">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image src="/mascot_bad.svg" width={80} height={80} alt="mascote" />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            Você ficou sem vida.
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Obtenha o Plano Pro para vidas ilimitadas ou compre vidas na loja.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              className="w-full"
              variant="primary"
              size="lg"
              onClick={onClick}
            >
              Adquira vidas ilimitadas
            </Button>

            <Button
              className="w-full"
              variant="primaryOutline"
              size="lg"
              onClick={close}
            >
              Não, obrigado
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
