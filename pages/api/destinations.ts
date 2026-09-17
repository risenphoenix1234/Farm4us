// Dummy data
const destinations = [
  { id: 1, name: 'Paris', country: 'France' },
  { id: 2, name: 'Tokyo', country: 'Japan' },
  { id: 3, name: 'Nairobi', country: 'Kenya' },
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(destinations);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
