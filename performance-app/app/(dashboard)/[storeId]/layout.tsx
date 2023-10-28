import prismadb from "@/lib/prisma";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import { Store } from "lucide-react";
import { redirect } from "next/navigation";
import { string } from "zod";





export default async function DashboardLayout({
    children,
    params
    
} : {
    children : React.ReactNode;
    params: { storeId : string}
}) {

    const { userId } = auth();

    if (!userId) {
        redirect(`/sign-in`);
    }

    const sotre = await prismadb.store.findFirst({
        where:{
            id: params.storeId,
        userId
    }
    }); 

    if (!sotre) {
        redirect(`/`);
        
    }
    return (
        <>
        <div>
          This is navbar
        </div>

        {children}
        </>
    )
}