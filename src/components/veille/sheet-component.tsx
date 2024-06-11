// @ts-nocheck
'use client'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function SheetComponent({ showSheet, handleCloseSheet }) {
  return (
    <Sheet open onClose={handleCloseSheet} position="left" dismissable>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{showSheet.titre}</SheetTitle>
          <SheetDescription>Bornage : {showSheet.bornage}</SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p>{showSheet.description}</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}