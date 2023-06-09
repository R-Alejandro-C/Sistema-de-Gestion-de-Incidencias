import React from 'react';

const Navbar = () => {
    return (
        <header className='bg-gray-950 w-full '>
        <nav className='flex lg:w-full justify-between items-center h-16 lg:h-14 '>
        <div className='ml-6 '><img src='https://s3.amazonaws.com/media.greatplacetowork.com/peru/best-workplaces-for-millennials-in-peru/2021/scotiabank/logo.png' className='w-44'></img></div>
        <div className='hidden lg:flex'>
                <ul className='flex items-center gap-[4vw] text-cyan-50 '>
                    
                </ul>
                </div>
                <div> <button className='mr-3'>Cerrar sesion</button></div>
        </nav>
        </header>
    );
}

export default Navbar;
