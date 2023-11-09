import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LogoutButton from './LogoutButton';

function Header() {

    const session = true; 

    if (session) return (
        <header className='sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm'>
            <div className='flex space-x-2'>
                <Image 
                    className='rounded-full mx-2 object-center'
                    height={10}
                    width={50}
                    src="https://media.licdn.com/dms/image/C4E03AQEKSJ7EfPoe_g/profile-displayphoto-shrink_200_200/0/1620177336745?e=1704931200&v=beta&t=ui1xfqClilsoI9k-UcuhDbnUZzLlQr6mhiXuN4YbFbc"
                    alt="Profile Picture"
                />

                <div>
                    <p className='text-blue-400'>Logged in as:</p>
                    <p className='font-bold text-lg'>Rodrigo Calles</p>
                </div>
            </div>

            <LogoutButton /> 

        </header>
    )

    return (
        <header className='sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm'>
            <div className='flex flex-col items-center space-y-5'>
                <div className='flex space-x-2 items-center'>
                    <Image src="https://links.papareact.com/jne" alt='Logo' height={10} width={50} />
                    <p className='text-blue-400'>Welcome to Meta Messenger</p>
                </div>

                <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' href='/auth/signin'>Sign In</Link>
            </div>

            
        </header>
    )
}

export default Header