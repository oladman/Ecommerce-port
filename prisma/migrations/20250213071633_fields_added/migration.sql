/*
  Warnings:

  - The primary key for the `products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Price` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `ProductAttach` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `ProductDetails` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `ProductName` on the `products` table. All the data in the column will be lost.
  - Added the required column `Description` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `returnDays` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" DROP CONSTRAINT "products_pkey",
DROP COLUMN "Price",
DROP COLUMN "ProductAttach",
DROP COLUMN "ProductDetails",
DROP COLUMN "ProductName",
ADD COLUMN     "Description" TEXT NOT NULL,
ADD COLUMN     "colors" TEXT[],
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "returnDays" INTEGER NOT NULL,
ADD COLUMN     "sizes" TEXT[],
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "products_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "products_id_seq";
