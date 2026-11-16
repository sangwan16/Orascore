import { supabase } from '../utils/supabase';
import { userSchema } from './schema';
function createUser(name: string, age: number, gender: string, city: string, thyroid: string, diabetes: string, hypertension: string, fillings: string, extraction: string, rct: string, removable_dentures: string, smoking: string, vaping: string, tobacco: string, alcohol: string): userSchema {
    return {
        name: name,
        age: age,
        gender: gender,
        city: city,
        mh_thyroid: thyroid,
        mh_diabetes: diabetes,
        mh_hypertension: hypertension,
        dh_fillings: fillings,
        dh_extractions: extraction,
        dh_root_canal_treatment: rct,
        dh_removable_dentures: removable_dentures,
        rf_smoking: smoking,
        rf_vaping: vaping,
        rf_tobacco: tobacco,
        rf_alcohol: alcohol
    }
}
export async function insertSampleUser() {
    console.log('inserting sample user');
    try {
        const user = createUser("Akash", 14, "Male", "Meerut", "No", "No", "No", "No", "Yes", "Yes", "Yes", "No", "Yes", "No", "Yes");
        const { data, error } = await supabase.from('Users').insert(user);
        console.log('sample user created', { data, error });
        if (error) {
            console.error('insertSampleUser error', error);
        }
    }
    catch (e) {
        console.log('error', e);
    }


}

export async function insertUser(props) {
    try {
        const user = createUser(props);
        const { data, error } = await supabase.from("Users").insert(user);
        console.log('data / error', { data, error });

    }
    catch (e) {
        console.log('error', e);
    }

}

export async function getUser() {
    try {
        const { data: allUsers, error } = await supabase.from('Users').select('*').limit(10);
        console.log('all users', allUsers);
    }
    catch (e) {
        console.log('error', e);
    }


}

export async function updateUser(uid, updatedObj) {
    try {
        const { data, error } = await supabase.from("Users").update(updatedObj).eq('uid', uid);
        console.log('error', e);
    }
    catch (e) {
        console.log('error', e);
    }

}

export async function deleteUser(uid) {
    try {
        const { data, error } = await supabase.from("Users").delete().eq('uid', uid);
        console.log({ data, error });
    }
    catch (e) {
        console.log('error', e);
    }

}