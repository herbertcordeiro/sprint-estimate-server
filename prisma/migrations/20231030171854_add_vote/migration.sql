/*
  Warnings:

  - You are about to drop the column `roomId` on the `rooms` table. All the data in the column will be lost.
  - The required column `inviteId` was added to the `rooms` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `rooms` DROP COLUMN `roomId`,
    ADD COLUMN `inviteId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `votes` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `userId` INTEGER UNSIGNED NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
