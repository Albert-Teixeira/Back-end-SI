-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('Homem', 'Mulher', 'Travesti', 'Vip');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "type" "ProductType" NOT NULL DEFAULT 'Vip';
