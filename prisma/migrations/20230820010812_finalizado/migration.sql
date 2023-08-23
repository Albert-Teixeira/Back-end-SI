/*
  Warnings:

  - Added the required column `beija` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horario` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "beija" TEXT NOT NULL,
ADD COLUMN     "horario" TEXT NOT NULL;
