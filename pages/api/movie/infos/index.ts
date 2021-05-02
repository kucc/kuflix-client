import { NextApiRequest, NextApiResponse } from 'next';
import { sampleMovieInfoData } from '../../../../utils/sample-data';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleMovieInfoData)) {
      throw new Error('Cannot find info data');
    }

    res.status(200).json(sampleMovieInfoData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;