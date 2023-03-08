export function handleBadRoute(req, res) {
  res.status(404).json({ error: 'route not found' });
}

export function verifyPostBody(req, res, next) {
  const { name, email, address } = req.body;

  if (!name === false && !email === false && !address === false) {
    if (typeof name === 'string' && typeof email === 'string' && typeof address === 'string') {
      if (name.length > 2 && email.includes('@') && address.split(',').length - 1 === 3) {
        return next();
      }
    }
  }
  res.status(500).json({ error: 'incorrect data has been provided' });
}
