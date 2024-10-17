import React from 'react'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Toaster = () => {
    console.log("sd")
  return (
    toast.success("Success Notification !", {
        position: "bottom-right"
      })
  )
}

export default Toaster