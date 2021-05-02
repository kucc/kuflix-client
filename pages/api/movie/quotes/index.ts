import { NextApiRequest, NextApiResponse } from 'next';
import { sampleMovieQuoteData } from '../../../../utils/sample-data';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleMovieQuoteData)) {
      throw new Error('Cannot find info data');
    }

    res.status(200).json(sampleMovieQuoteData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;