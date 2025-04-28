import visitorHttpHandler from '@/backend/routes/visitorRoutes';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await visitorHttpHandler.login(req, res);
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}