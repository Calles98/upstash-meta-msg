import { NextApiRequest, NextApiResponse } from "next"
import redis from '../../../redis'
import { Message } from "@/typings";
import { NextResponse } from "next/server";
import { serverPusher } from "@/pusher";

// type Data = {
//     message: Message
// }

// type ErrorData = {
//     body: string
// }

// export default async function handler(
//     req: NextApiRequest, 
//     res: NextApiResponse<Data | ErrorData>
// ) {
//     if (req.method !== "POST") {
//         res.status(405).json({ body: "Method Not Allowed" }); 
//         return; 
//     }

//     const { message } = req.body; 

//     const newMessage = {
//         ...message, 
//         // Replace the timestamp of the user with the timestamp of the server
//         created_at: Date.now()
//     }

//     // push to upstash redis db
//     await redis.hset('messages', message.id, JSON.stringify(newMessage)); 

//     return res.status(200).json({ message: newMessage });
// }



export async function POST(request: Request, response: Response ) {
    try { 

        const { message } = await request.json()

        const newMessage = {
            ...message, 
            //replace the timestamp of the user with the timestamp of the server
            created_at: Date.now() 
        }

        // push to upstash redis db
        await redis.hset('messages', message.id, JSON.stringify(newMessage)); 

        serverPusher.trigger('messages', 'new-message', newMessage); 

        return NextResponse.json({
            message: newMessage
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