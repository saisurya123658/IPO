const bcrypt = require('bcrypt');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function seedAdmin() {
  const email = 'admin@blustock.com';
  const rawPassword = 'admin123';
  const hashedPassword = await bcrypt.hash(rawPassword, 10);

  try {
    const result = await pool.query(
      `INSERT INTO admin_login ("Email", "Password")
       VALUES ($1, $2)
       ON CONFLICT ("Email") DO UPDATE SET "Password" = $2`,
      [email, hashedPassword]
    );

    console.log('✅ Admin seeded successfully');
  } catch (err) {
    console.error('❌ Failed to seed admin:', err);
  } finally {
    await pool.end();
  }
}

seedAdmin();
