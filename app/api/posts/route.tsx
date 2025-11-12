import { getConnection } from "@/lib/db";
import { NextResponse } from "next/server";
export const dynamic = 'force-static';
export async function GET() {
    try{
        const db = await getConnection()
        const sql = "SELECT * FROM news"
        const [news] = await db.query(sql) 
        return NextResponse.json({news: news}) 
    }
    catch(error)
    {
        console.error(error)
        return NextResponse.json({error: error})
    }
}