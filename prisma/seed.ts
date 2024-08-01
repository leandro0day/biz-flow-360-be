import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin', 10);

  // Crear un usuario admin
  await prisma.users.create({
    data: {
      name: 'Admin',
      lastName: 'User',
      phone: '1234567890',
      email: 'admin@example.com',
      password: hashedPassword,
      status: 'ACTIVE',
      rol: 'ADMIN',
    },
  });

  console.log('Admin user created');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
