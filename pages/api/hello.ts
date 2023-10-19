import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req, res:NextApiResponse) {
    res.status(200).json({ text: 'Hello' });
}