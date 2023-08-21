import {supabaseAdmin} from "../../lib/supabase.ts";

async function signInWithEmail(email: string, password: string): Promise<void> {
    const { data, error } = await supabaseAdmin.auth.signInWithPassword({
        email: email,
        password: password,
    })
}

async function signOut(): Promise<void> {
    const { error } = await supabaseAdmin.auth.signOut()
}

