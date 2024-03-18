import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '../initSupabase';
import { Session } from '@supabase/supabase-js';
type ContextProps = {
    user: null | boolean;
    session: Session | null;
    testLogin: () => void;
};

const AuthContext = createContext<Partial<ContextProps>>({});

interface Props {
    children: React.ReactNode;
}

const AuthProvider = (props: Props) => {
    // user null = loading
    const [user, setUser] = useState<null | boolean>(null);
    const [session, setSession] = useState<Session | null>(null);

    const testLogin = () => {
        setUser(true);
    };

    useEffect(() => {
        // 화면구현 진행을 위해 임시 주석처리하였습니다. 기능개발 시 주석 해제 후 진행하시면 됩니다.
        // const session = supabase.auth.session();
        // setSession(session);
        // setUser(session ? true : false);
        // const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
        //     console.log(`Supabase auth event: ${event}`);
        //     setSession(session);
        //     setUser(session ? true : false);
        // });
        // return () => {
        //     authListener!.unsubscribe();
        // };
    }, [user]);

    return (
        <AuthContext.Provider
            value={{
                user,
                session,
                testLogin,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
