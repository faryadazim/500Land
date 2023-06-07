import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../../supabase';

export const requireAuth = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    next: () => void
) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const variableData = token.substring(7);
        const { data } = await supabase.auth.getUser(variableData);
        if (data?.user) {
            next();
        }
        return res.status(401).json({ error: 'Unauthorized' });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
