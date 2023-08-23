/*
  Warnings:

  - You are about to drop the column `description` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `material` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `Product` table. All the data in the column will be lost.
  - The `url` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `MoraSo` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `altura` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `anal` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atende` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cartao` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descricao` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idade` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `oral` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `peso` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whatsapp` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "description",
DROP COLUMN "material",
DROP COLUMN "name",
DROP COLUMN "price",
DROP COLUMN "size",
DROP COLUMN "weight",
ADD COLUMN     "MoraSo" TEXT NOT NULL,
ADD COLUMN     "altura" INTEGER NOT NULL,
ADD COLUMN     "anal" TEXT NOT NULL,
ADD COLUMN     "atende" TEXT NOT NULL,
ADD COLUMN     "cartao" TEXT NOT NULL,
ADD COLUMN     "cidade" TEXT NOT NULL,
ADD COLUMN     "descricao" TEXT NOT NULL,
ADD COLUMN     "idade" INTEGER NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "oral" TEXT NOT NULL,
ADD COLUMN     "peso" INTEGER NOT NULL,
ADD COLUMN     "telefone" TEXT NOT NULL,
ADD COLUMN     "valor" INTEGER NOT NULL,
ADD COLUMN     "whatsapp" TEXT NOT NULL,
DROP COLUMN "url",
ADD COLUMN     "url" TEXT[];
