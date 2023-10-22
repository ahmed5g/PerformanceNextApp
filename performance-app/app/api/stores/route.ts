import prismadb from "@/lib/prisma";
import { error } from "console";
import { requestToBodyStream } from "next/dist/server/body-streams";
import { NextResponse } from "next/server";

export async function POST(
    req:Request,
    ) {
        try{
            const body = await req.json();
            const {name} = body;

            if (!name){
                return new NextResponse("name is Required", {status: 400})
            }

            const store = await prismadb.store.create({ 
                data: {
                    name
                }

            })
            return NextResponse.json(store);

        } catch(error){
            console.log('[STORE_POST]', error);
            return new NextResponse("Internal error", {status: 500});
        }

}