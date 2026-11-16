import { supabase } from '../utils/supabase';


export const loginUser = async (email, password) => {
    try {
        const { data, error } = await supabase?.auth.signInWithPassword({ email, password });
        console.log('error', error);
        return data;
    }
    catch (e) {
        console.log('error', e);
    }
}

export const signInUser = async (email, password) => {
    try {
        const { data, error } = await supabase?.auth.signUp({ email, password });
        console.log('error', error);
        if(error) throw error;
        return data;
    }
    catch (e) {
        console.log('error', e);
    }
}

export const signOut = async () => {
    try {
        const { error } = await supabase?.auth.signOut();
        console.log('error', error);
    }
    catch (e) {
        console.log('error', e);
    }
}


export const getUser = async () => {
    try {
        const { data, error } = supabase.auth.getUser();
        console.log('data', data);
        console.log('error', error);
    }
    catch (e) {
        console.log('error', e);
    }
}