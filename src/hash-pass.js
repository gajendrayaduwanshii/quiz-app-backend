const bcrypt = require('bcryptjs');

(async () => {
  const password = process.env.PASSWORD_TO_HASH;

  if (!password) {
    throw new Error('Set PASSWORD_TO_HASH before running this utility.');
  }

  const hash = await bcrypt.hash(password, 10);

  console.log('Hashed password:', hash);
})();
