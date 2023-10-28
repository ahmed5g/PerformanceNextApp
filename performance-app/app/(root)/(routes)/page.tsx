"use client"
import { useStoreModel } from "@/Hooks/use-store-model";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import {useEffect}from "react";


const SetupPage = () => {
  const onOpen = useStoreModel((state) => state.onOpen);
  const isOpen = useStoreModel((state) => state.isOpen);

  useEffect (() =>{

    if(!isOpen){
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
};

export default SetupPage;