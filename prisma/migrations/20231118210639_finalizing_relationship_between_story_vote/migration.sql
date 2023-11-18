/*
  Warnings:

  - Made the column `userId` on table `votes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `storyId` on table `votes` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `votes` DROP FOREIGN KEY `votes_storyId_fkey`;

-- AlterTable
ALTER TABLE `votes` MODIFY `userId` INTEGER UNSIGNED NOT NULL,
    MODIFY `storyId` INTEGER UNSIGNED NOT NULL;

-- AddForeignKey
ALTER TABLE `votes` ADD CONSTRAINT `votes_storyId_fkey` FOREIGN KEY (`storyId`) REFERENCES `stories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
