import Email from '../models/emails.model.js';
import Phone from '../models/phones.model.js';
import User from '../models/user.model.js';

export const updateUser = async (req, res) => {
  try {
    const id = req.query.userId;
    const { firstName, lastName, emails, phones } = req.body;
    await User.update(
      { firstName, lastName },
      {
        where: {
          id
        }
      }
    );

    emails.forEach(async (email) => {
      await Email.update(
        { email: email.email },
        {
          where: {
            id: email.id
          }
        }
      );
    });

    phones.forEach(async (phone) => {
      await Phone.update(
        { email: phone.phone },
        {
          where: {
            id: phone.id
          }
        }
      );
    });
    res.json({ id });
  } catch (error) {
    res.status(500).json({ error: 'Error updating user from db' });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.query.userId;
    const user = await User.destroy({
      where: {
        id
      }
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user from db' });
  }
};

export const createUser = async (req, res) => {
  try {
    // Add validation to make sure user email addresses are unique.
    const { firstName, lastName, emails, phones } = req.body;

    const user = await User.create({ firstName, lastName });
    await Email.bulkCreate(emails.map((email) => ({ email, userId: user.id })));
    await Phone.bulkCreate(phones.map((phone) => ({ phone, userId: user.id })));

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user from db' });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    if (users.length === 0) res.status(404).json({ message: 'No users found' });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error getting users from db' });
  }
};

export const getUser = async (req, res) => {
  try {
    const id = req.query.userId;

    const user = await User.findOne({
      where: {
        id
      },
      include: [
        {
          model: Email
        },
        {
          model: Phone
        }
      ]
    });

    if (!user) res.status(404).json({ message: 'No user found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error getting users from db' });
  }
};
