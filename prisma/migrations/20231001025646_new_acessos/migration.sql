/*
  Warnings:

  - You are about to drop the column `Acessos` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "Acessos",
ADD COLUMN     "acessos" INTEGER NOT NULL DEFAULT 0;
