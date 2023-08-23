import {Endpoints} from "../endpoints.ts";


export async function signIn(email: string, password: string): Promise<any> {
    console.log('email: ', email);
    console.log('passsword: ', password);
    return 'ok';
    // try {
    //     const response: Response = await fetch(Endpoints.auth());
    //     return await response.json();
    // } catch (error) {
    //     console.error('Ocorreu um erro:', error);
    //     throw error;
    // }
}