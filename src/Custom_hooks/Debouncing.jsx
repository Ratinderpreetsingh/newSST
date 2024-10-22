import React, { useEffect, useState } from 'react'

const useDebounce  = (value,delay) => {
    const [debouncing,setDebouncig]=useState()
    useEffect(()=>{
      const handler=  setTimeout(()=>{
        setDebouncig(value)
        },delay)

        return () => {
            clearTimeout(handler);
        }
    },[value,delay])
  return debouncing
}

export default useDebounce 