import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from '../../../supabase'


type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {

    try {
      const { email, password, phone } = req.body;
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        // phone:  //comment down as phone signup is disable
        // options: {
        //   redirectTo: 'https://example.com/dashboard',
        // },
      });


      if (error) {
        throw new Error("Went wrong");
      }

          return res.status(200).json({ message: 'User registered successfully!' });
    } catch (error) { 
         return  res.status(400).json({ message: 'User registration failed ' });
    }
  } else {
       return  res.status(405).json({ message: 'User registration failed' });
  }


}


