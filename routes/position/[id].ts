import {supabaseAdmin} from "../../lib/supabase.ts";


export const handler = async (_req: Request, _ctx: HandlerContext): Response => {
    const position = await supabaseAdmin.from('position').select().eq('id', _ctx.params.id).single();
    return new Response(JSON.stringify(position.data));
};