-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "paidAt" TIMESTAMP(3),
ADD COLUMN     "paymentAmount" INTEGER,
ADD COLUMN     "paymentMethod" TEXT,
ADD COLUMN     "paymentStatus" TEXT,
ADD COLUMN     "razorpayOrderId" TEXT,
ADD COLUMN     "razorpayPaymentId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Lead_razorpayOrderId_key" ON "Lead"("razorpayOrderId");

-- CreateIndex
CREATE INDEX "Lead_paymentStatus_idx" ON "Lead"("paymentStatus");

