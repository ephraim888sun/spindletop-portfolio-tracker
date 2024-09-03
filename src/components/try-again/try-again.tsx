"use client";
import { useRouter } from "next/navigation";

import { ReloadIcon } from "../../../public/reload-icon";
import { Button } from "@/components/ui/button";

export const TryAgain = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-3 p-4">
      <h2 className="text-2xl text-tertiary text-center">Something went wrong. Try reloading.</h2>
      <Button onClick={() => router.refresh()} >
        <span className="flex">
          <ReloadIcon />
        </span>
        <span>Retry</span>
      </Button>
    </div>
  );
};