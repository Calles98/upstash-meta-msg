import Image from 'next/image'
import MessageList from './MessageList'
import ChatInput from './ChatInput'
import { Message } from '@/typings';
import Loading from './loading';
import { getServerSession } from 'next-auth';
import Providers from './providers';


export default async function Home() {

  const data = await fetch(`${process.env.VERCEL_URL || "http://localhost:3000"}/api/getMessages`).then((res) => res.json());
  const messages: Message[] = data.messages; 
  const session = await getServerSession(); 

  return (

    <Providers>
      <main>
        <MessageList initialMessages={messages} />
        <ChatInput session={session} /> 
      </main>
    </Providers>

  )
}
