export const updateUser = (req, res) => {
  const userId = req.params.id;
  res.send(`ID ${userId} updated`);
};

export const deleteUser = (req, res) => {
  const userId = req.params.id;
  res.send(`ID ${userId} deleted`);
};

export const createuser = (req, res) => {
  res.send(`User created`);
};

export const getUsers = (req, res) => {
  res.send(`Users`);
};
