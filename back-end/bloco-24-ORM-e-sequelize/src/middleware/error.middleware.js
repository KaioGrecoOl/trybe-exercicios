module.exports = (err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message })
      break;
    case 'NotFoundError':
      res.status(404).json({ message })
      break;
    case 'ConflictError':
      res.status(409).json({ message })
      break;
    case 'UnauthorizedError':
      res.status(401).json({ message })
      break;
    default:
      res.status(500).json({ message })
      break;
  }
}

// const errors = {
//     ValidationError: 400,
//     NotFoundError: 404,
//   };

//   const errorHandlerMiddleware = ({ name, message }, _req, res, _next) => {
//     const status = errors[name];
//     if (!status) return res.sendStatus(500);
//     res.status(status).json({ message });
//   };

//   module.exports = errorHandlerMiddleware;