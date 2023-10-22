import prismadb from "@/lib/prisma";
import { string } from "zod";





export default async function DashboardLayout({
    children,
    params
    
} : {
    children : React.ReactNode;
    params: { storeId : string}
}) {


    const sotre = await prismadb.store.findFirst({
        where:{id:params.storeId},
    }) 
    return (
        <>
        <div>
            this is NavBar
        </div>

        {children}
        </>
    )
}