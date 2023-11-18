/*
  Warnings:

  - You are about to drop the column `updateAt` on the `rooms` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `stories` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `votes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `rooms` DROP COLUMN `updateAt`,
    ADD COLUMN `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `stories` DROP COLUMN `updateAt`,
    ADD COLUMN `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `users` DROP COLUMN `updateAt`,
    ADD COLUMN `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `votes` DROP COLUMN `updateAt`,
    ADD COLUMN `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);
