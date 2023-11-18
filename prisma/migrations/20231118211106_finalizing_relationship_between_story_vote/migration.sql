-- DropForeignKey
ALTER TABLE `votes` DROP FOREIGN KEY `votes_storyId_fkey`;

-- AlterTable
ALTER TABLE `votes` MODIFY `userId` INTEGER UNSIGNED NULL,
    MODIFY `storyId` INTEGER UNSIGNED NULL;

-- AddForeignKey
ALTER TABLE `votes` ADD CONSTRAINT `votes_storyId_fkey` FOREIGN KEY (`storyId`) REFERENCES `stories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
