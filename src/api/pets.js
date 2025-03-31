const { dbExecAsync, dbAllAsync } = require('../db');

function registerPetRoutes(app) {
  app.get('/api/pets', async (req, res) => {
    return res.json(await dbAllAsync('SELECT * FROM pets;'));
  });

  app.post('/api/pets', async (req, res) => {
    try {
      const name = req.body.name;
      if (typeof name !== 'string') {
        return res.json({ error: 'Name must be a string' });
      }

      // This is not secure
      await dbExecAsync(
        `INSERT INTO pets(name, owner) VALUES ('${name}', 'Aikido Security');`
      );
      return res.send('Added new pet successfully');
    } catch (err) {
      // This is not secure
      return res.status(500).send(err.message);
    }
  });

  app.delete('/api/pets', async (req, res) => {
    await dbExecAsync(`DELETE FROM pets;`);
    return res.send('OK');
  });
}

module.exports = {
  registerPetRoutes,
};
