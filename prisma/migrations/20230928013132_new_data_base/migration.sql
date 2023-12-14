/*
  Warnings:

  - The values [FEMININO,MASCULINO,INFANTIL,NOVIDADES] on the enum `ProductType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `estoque` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `marca` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `material` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `tamanho` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `vendedor` on the `Product` table. All the data in the column will be lost.
  - Added the required column `MoraSo` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `altura` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `anal` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atende` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `beija` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horario` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idade` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `oral` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `peso` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whatsapp` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ProductType_new" AS ENUM ('HOMENS', 'MULHERES', 'TRAVESTIS', 'VIPS');
ALTER TABLE "Product" ALTER COLUMN "type" TYPE "ProductType_new" USING ("type"::text::"ProductType_new");
ALTER TYPE "ProductType" RENAME TO "ProductType_old";
ALTER TYPE "ProductType_new" RENAME TO "ProductType";
DROP TYPE "ProductType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "estoque",
DROP COLUMN "marca",
DROP COLUMN "material",
DROP COLUMN "tamanho",
DROP COLUMN "vendedor",
ADD COLUMN     "MoraSo" TEXT NOT NULL,
ADD COLUMN     "altura" INTEGER NOT NULL,
ADD COLUMN     "anal" TEXT NOT NULL,
ADD COLUMN     "atende" TEXT NOT NULL,
ADD COLUMN     "beija" TEXT NOT NULL,
ADD COLUMN     "horario" TEXT NOT NULL,
ADD COLUMN     "idade" INTEGER NOT NULL,
ADD COLUMN     "oral" TEXT NOT NULL,
ADD COLUMN     "pago" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "peso" INTEGER NOT NULL,
ADD COLUMN     "whatsapp" TEXT NOT NULL;
