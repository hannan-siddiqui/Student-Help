import  { useEffect, useState } from 'react'

const useDSASHEET = () => {

    const [DSA, setDSA] = useState(null)

    const dsa = async ()=>{
        const data = await fetch("https://adminapi.takeuforward.org/api/sheets/double/strivers_a2z_sheet")
        const json = await data.json();
       
        setDSA(json)
    }

    useEffect(()=>{
        dsa();
    }, [])


  return DSA;
}

export default useDSASHEET;