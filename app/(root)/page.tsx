import React from 'react';
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
    const loggedIn = {firstName:'Elman' , lastName:'Zeynalov' , email:'elman.zeynalov@gmail.com'}
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox title={'Welcome'} type={'greeting'} user={loggedIn.firstName} subtext={'Access and manage your account and transactions efficiently.'} />

                <TotalBalanceBox
                    totalBanks={1}
                    totalCurrentBalance={9453674}
                    accounts={[]}
                />
            </header>
                RECENT TRACSacSION
            </div>
            <RightSidebar
                user={loggedIn}
                transactions ={[]}
                banks={[{currentBalance:123.44},{currentBalance:554.34}]}
            />
        </section>
    );
};

export default Home;
