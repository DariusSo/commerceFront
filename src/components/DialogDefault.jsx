import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { SimpleRegistrationForm } from "./SimpleRegistrationForm";
 
export function DialogDefault({name, color, form}) {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button onClick={handleOpen} variant="gradient" color={color}>
        {name}
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="flex justify-center items-center">
          {form}
        </DialogBody>
      </Dialog>
    </>
  );
}