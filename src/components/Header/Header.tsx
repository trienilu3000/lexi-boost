import React, { useState } from 'react';
import LXModal from '../Modal/Modal';
import AuthPage from '../../pages/auth/AuthPage';

const Header: React.FC = () => {
    const [isModalLogin, setIsModalLogin] = useState(false);
    const [isModalSigup, setIsModalSignup] = useState(false);
    const showModalLogin = () => {
        setIsModalLogin(true);
    };

    const showModalSignup = () => {
        setIsModalSignup(true);
    };


    const handleCancel = () => {
        setIsModalLogin(false);
        setIsModalSignup(false)
    };
    return (
        <header className="flex justify-between items-center p-2  bg-white border-b border-b-gray-300">
            <div className="flex items-center mx-2">
                <svg className="svg" width="20" height="20" viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg"><path d="M19 28.5c0-5.247 4.253-9.5 9.5-9.5 5.247 0 9.5 4.253 9.5 9.5 0 5.247-4.253 9.5-9.5 9.5-5.247 0-9.5-4.253-9.5-9.5z" fillRule="nonzero" fillOpacity="1" fill="#1abcfe" stroke="none"></path><path d="M0 47.5C0 42.253 4.253 38 9.5 38H19v9.5c0 5.247-4.253 9.5-9.5 9.5C4.253 57 0 52.747 0 47.5z" fillRule="nonzero" fillOpacity="1" fill="#0acf83" stroke="none"></path><path d="M19 0v19h9.5c5.247 0 9.5-4.253 9.5-9.5C38 4.253 33.747 0 28.5 0H19z" fillRule="nonzero" fillOpacity="1" fill="#ff7262" stroke="none"></path><path d="M0 9.5C0 14.747 4.253 19 9.5 19H19V0H9.5C4.253 0 0 4.253 0 9.5z" fillRule="nonzero" fillOpacity="1" fill="#f24e1e" stroke="none"></path><path d="M0 28.5C0 33.747 4.253 38 9.5 38H19V19H9.5C4.253 19 0 23.253 0 28.5z" fillRule="nonzero" fillOpacity="1" fill="#a259ff" stroke="none"></path></svg>
                <span className="ml-2  font-bold text-black">LexiBoost</span>
            </div>

            <div className="flex items-center space-x-2 mx-2">
                <button className=" text-black text-xs px-3 py-2 " onClick={showModalLogin} >Log in</button>
                <LXModal open={isModalLogin} onCancel={handleCancel}>
                    <div className='mx-5'>
                        <AuthPage type="login"></AuthPage>
                    </div>
                </LXModal>

                <button className="text-black text-xs px-3 py-1.5 border rounded-md  " onClick={showModalSignup}>Sign up</button>
                <LXModal open={isModalSigup} onCancel={handleCancel}>
                    <div className='mx-5'>
                        <AuthPage type="signup"></AuthPage>
                    </div>
                </LXModal>
            </div>
        </header>
    );
};

export default Header;
