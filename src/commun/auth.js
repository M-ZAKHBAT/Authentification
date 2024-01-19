export const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const jwtToken = `${token}`.replace("Bearer", "");
    try {
      const payload = jwt.verify(jwtToken, "privatekey");
      if (payload) {
        next();
      } else {
        res.status(401).json();
      }
    } catch (err) {
      res.status(401).json();
    }
  } else res.status(401).json();
};
