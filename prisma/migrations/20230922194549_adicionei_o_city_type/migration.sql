/*
  Warnings:

  - Changed the type of `cidade` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "CityType" AS ENUM ('AsaNorte', 'AsaSul', 'AguasClaras', 'LagoSul', 'LagoNorte', 'Sudoeste', 'NucleoBandeirantes', 'Guara', 'Taguatinga', 'VicentePires', 'Ceilandia', 'Samambaia', 'RiachoFundo', 'RecantoDasEmas', 'SantaMaria', 'Gama', 'SaoSebastiao', 'Paranoa', 'Planaltina', 'Sobradinho', 'Brazlandia', 'Candangolandia');

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "cidade",
ADD COLUMN     "cidade" "CityType" NOT NULL;
