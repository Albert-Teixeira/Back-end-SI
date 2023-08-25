/*
  Warnings:

  - The values [HOMENS,MULHERES,TRAVESTIS,VIPS] on the enum `ProductType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `MoraSo` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `altura` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `anal` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `atende` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `beija` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `horario` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `idade` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `oral` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `peso` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `whatsapp` on the `Product` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ProductType_new" AS ENUM ('FEMININO', 'MASCULINO', 'INFANTIL', 'NOVIDADES');
ALTER TABLE "Product" ALTER COLUMN "type" TYPE "ProductType_new" USING ("type"::text::"ProductType_new");
ALTER TYPE "ProductType" RENAME TO "ProductType_old";
ALTER TYPE "ProductType_new" RENAME TO "ProductType";
DROP TYPE "ProductType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "MoraSo",
DROP COLUMN "altura",
DROP COLUMN "anal",
DROP COLUMN "atende",
DROP COLUMN "beija",
DROP COLUMN "horario",
DROP COLUMN "idade",
DROP COLUMN "oral",
DROP COLUMN "peso",
DROP COLUMN "whatsapp",
ADD COLUMN     "estoque" INTEGER NOT NULL DEFAULT 10,
ADD COLUMN     "marca" TEXT NOT NULL DEFAULT 'nike',
ADD COLUMN     "material" TEXT NOT NULL DEFAULT 'pano',
ADD COLUMN     "tamanho" INTEGER NOT NULL DEFAULT 10,
ADD COLUMN     "vendedor" TEXT NOT NULL DEFAULT 'rychard';
