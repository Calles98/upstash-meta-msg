import { NextApiRequest, NextApiResponse } from "next"
import redis from '../../../redis'
import { Message } from "@/typings";
import { NextResponse } from "next/server";


export async function GET(request: Request, response: Response ) {
    try { 

        const messagesRes = await redis.hvals("messages"); 
        const messages: Message[] = 
            messagesRes.map((message) => JSON.parse(message)).sort((a, b) => b.created_at - a.created_at)
        
        return NextResponse.json({
            messages
            }, {
            status: 200,
            })


        } catch (error) {
            return NextResponse.json(
                { error: "Method Not Allowed" },
                {
                  status: 405,
                }
            )
          
    } 
  }