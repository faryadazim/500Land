import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../../supabase';
import { requireAuth } from '../auth/Authorized';
import { NextResponse } from 'next/server';

type Data = {
    res: any | null;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'GET') {
        try {
            await requireAuth(req, res, () => {
                // Execute the original API logic
                return res.status(200).json({ res: "Access Successfully" });
            });

        } catch (error) {
            return res.status(400).json({ res: 'Error' });
        }
    } else {
        return res.status(405).json({ res: 'Interval Server Error' });
    }
}
