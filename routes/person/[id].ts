import {supabaseAdmin} from "../../lib/supabase.ts";


export const handler = async (_req: Request, _ctx: HandlerContext): Response => {
    const person = await supabaseAdmin.from('person').select().eq('id', _ctx.params.id).single().select('*, person(*, person(*))');
    await new Promise(resolve => setTimeout(resolve, 30));
    return new Response(JSON.stringify(person.data));
};