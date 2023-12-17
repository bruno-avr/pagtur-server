-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "confirmant" "UserType" NOT NULL DEFAULT 'PARENT';
