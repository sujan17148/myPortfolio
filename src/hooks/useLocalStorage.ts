import { useEffect, useState } from "react";

export default function useLocalStorage<T>(key:string,initialValue:T){
    const [value,setValue]=useState<T>(()=>{
        const jsonValue=localStorage.getItem(key)
        return jsonValue !==null ? JSON.parse(jsonValue) : initialValue
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value,key])
 return [value,setValue] as const
}