"use client"
import { useStoreModel } from "@/Hooks/use-store-model";
import {useEffect}from "react";


const SetupPage = () => {
  const onOpen = useStoreModel((state) => state.onOpen);
  const isOpen = useStoreModel((state) => state.isOpen);

  useEffect (() =>{

    if(!isOpen){
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <div >
      root page
    </div>
  )
};

export default SetupPage;