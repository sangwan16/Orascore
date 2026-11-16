import { createContext, useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';



export const AuthContext = createContext({});
export default function AuthContextProvider(props: any) {
    const [profile, setProfile] = useState([]);
    const [claims, setClaims] = useState({});
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('dummy@gmail.com');
    useEffect(() => {

        async function fetchClaims() {
            setLoading(true);
            const { data, error } = await supabase?.auth.getClaims();
            setClaims(data?.claims ?? {});
            setLoading(false);
        }

        const { data: { subscription }, } = supabase?.auth.onAuthStateChange((_event) => {
            console.log('event', _event);
            return (async () => {
                const { data, error } = await supabase?.auth.getClaims();
                setClaims(data?.claims ?? {});
            });
        })
        fetchClaims();
        return () => {
            console.log('unsubscription auth state change ');
            subscription.unsubscribe;
        };
    }, []);

    useEffect(() => {
        const fetchProfile = async () => {
            setLoading(true);
            if (claims) {
                const { data: user, error } = await supabase.from("Users").select().eq('uid', claims?.sub);
                setProfile(user);
            }
            else {
                setProfile([]);
            }
            setLoading(false);

        }
        fetchProfile();
    }, [claims]);



    return (<AuthContext.Provider value={{ email, profile, loading, claims }}>
        {props.children}
    </AuthContext.Provider>);
}