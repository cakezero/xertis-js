import { X } from "lucide-react";
import { ClipLoader } from 'react-spinners'

export const Spinner = () => {
  return <ClipLoader size={30} color={"white"} />
}

export const Cancel = () => {
  return <X />
}