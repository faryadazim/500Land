// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from '../../../supabase'

import { requireAuth } from './Authorized';
type Data = {
    res: any | null
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {

        try {
            // await requireAuth(req, res);
            const { email, password, phone } = req.body;
            const { data, error } = await supabase.auth.signInWithPassword({ email, password });

            return res.status(200).json({ res: data?.session });
        } catch (error) {
            return res.status(400).json({ res: 'User registration failed' });
        }
    } else {
        return res.status(405).json({ res: 'Interval Server Error' });
    }


}


