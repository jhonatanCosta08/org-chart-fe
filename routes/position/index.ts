import {supabaseAdmin} from "../../lib/supabase.ts";

export const handler = {
    GET: async (_req: Request, _ctx: HandlerContext): Response => {
        const position = await supabaseAdmin.from('position').select('*, person(*, person(*))');
        return new Response(JSON.stringify(position.data));
    },
    POST: async (_req: Request, _ctx: HandlerContext): Response => {
        const value = await _req.json();
        const position = await supabaseAdmin.from('position').insert(value).select();
        return new Response(JSON.stringify(position.data));
    }
};
