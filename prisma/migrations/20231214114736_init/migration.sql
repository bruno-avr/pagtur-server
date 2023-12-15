/*
  Warnings:

  - You are about to drop the column `paymentId` on the `Contract` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[contractId]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `contractId` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Contract" DROP CONSTRAINT "Contract_paymentId_fkey";

-- DropIndex
DROP INDEX "Contract_paymentId_key";

-- AlterTable
ALTER TABLE "Contract" DROP COLUMN "paymentId";

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "contractId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Payment_contractId_key" ON "Payment"("contractId");

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
