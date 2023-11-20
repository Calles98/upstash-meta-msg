import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
    appId: process.env.PUSHER_APP_ID!, 
    key: process.env.PUSHER_APP_KEY!,
    secret: process.env.PUSHER_APP_SECRET!,
    cluster: 'us3',
    useTLS: true,


}); 

export const clientPusher = new ClientPusher("fb1236c0046fca63c8ae", {
    cluster: 'us3',
    forceTLS: true, 
}); 