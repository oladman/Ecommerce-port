const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: "John Doe",
        email: "john@example.com",
        password: "password123",
        role: "USER",
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        password: "password123",
        role: "USER",
      },
      {
        name: "Michael Brown",
        email: "michael@example.com",
        password: "password123",
        role: "USER",
      },
      {
        name: "Sarah Wilson",
        email: "sarah@example.com",
        password: "password123",
        role: "USER",
      },
      {
        name: "Admin User",
        email: "admin@example.com",
        password: "admin123",
        role: "ADMIN",
      },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Users seeded successfully");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
