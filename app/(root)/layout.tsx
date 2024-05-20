import Sidebar from "@/components/Sidebar";
import React from "react";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    const logedIn = {firstName:'Elman', lastName:'Zeynalov'}

    return (
        <main className='flex h-screen w-full font-inter'>
            <Sidebar user={logedIn}/>
            <div className='flex size-full flex-col'>
                <div className='root-layout'>
                    <Image src='/icons/logo.svg' alt='menuLogo' width={30} height={30} />
                        <MobileNav user={logedIn}/>
                </div>
                {children}
            </div>




        </main>
    );
}
