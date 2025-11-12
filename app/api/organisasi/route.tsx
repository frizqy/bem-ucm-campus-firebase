import { getConnection } from "@/lib/db";
import { NextResponse } from "next/server";
export const dynamic = 'force-static';
export async function GET() {
    try{
        const db = await getConnection()
        const sql = "SELECT * FROM struktur_organisasi"
        const [anggota] = await db.query(sql) 
        return NextResponse.json({news: anggota}) 
    }
    catch(error)
    {
        console.error(error)
        return NextResponse.json({error: error})
    }
}