"use client"

import { StoreModel } from "@/components/modals/store-model";
import {useEffect , useState} from "react"


export const ModelProvider =() =>{
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() =>{
        setIsMounted(true);
    }, []);

    if (!isMounted){
        return null;
    }

    return (
        <>
        <StoreModel />
        </>
    )
}