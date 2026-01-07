const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // 1️⃣ Create parent category
  const sports = await prisma.category.create({
    data: {
      name: "Sports",
      parentId: null,
      path: "Sports",
    },
  });

  // 2️⃣ Child category: Fitness & Exercise
  const fitnessExercise = await prisma.category.create({
    data: {
      name: "Fitness & Exercise",
      parentId: sports.id,
      path: `${sports.path}/Fitness & Exercise`,
    },
  });

  // 3️⃣ Child category: Outdoor Sports
  const outdoorSports = await prisma.category.create({
    data: {
      name: "Outdoor Sports",
      parentId: sports.id,
      path: `${sports.path}/Outdoor Sports`,
    },
  });

  // 4️⃣ Child category: Team Sports
  const teamSports = await prisma.category.create({
    data: {
      name: "Team Sports",
      parentId: sports.id,
      path: `${sports.path}/Team Sports`,
    },
  });

  // 5️⃣ Child category: Water Sports
  const waterSports = await prisma.category.create({
    data: {
      name: "Water Sports",
      parentId: sports.id,
      path: `${sports.path}/Water Sports`,
    },
  });

  // 6️⃣ Child category: Sports Accessories
  const sportsAccessories = await prisma.category.create({
    data: {
      name: "Sports Accessories",
      parentId: sports.id,
      path: `${sports.path}/Sports Accessories`,
    },
  });

  console.log("Sports categories created successfully!");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
