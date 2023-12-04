import React, { useState, useEffect } from 'react'




const UseMedia = (media) => {

  const [match, setMatch] = useState(null)


  useEffect(() => {

    function sizeCheck() {

      const {matches } = window.matchMedia(media)
      setMatch(matches)
    }
    sizeCheck()
    
  window.addEventListener("resize", sizeCheck)
    return () => {
      window.removeEventListener("resize",sizeCheck)
    }
  }, [media])
  

  
 return match
 
}

export default UseMedia




//TODO FAZER O CUSTOM HOOK