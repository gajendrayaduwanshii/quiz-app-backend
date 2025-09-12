const bcrypt = require('bcryptjs');

(async () => {
  const password = 'Gajendra@1991'; // यहां अपना पासवर्ड डालें
  const hash = await bcrypt.hash(password, 10);

  console.log('Hashed password:', hash);
})();