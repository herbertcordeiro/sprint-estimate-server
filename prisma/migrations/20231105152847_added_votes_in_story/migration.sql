-- AlterTable
ALTER TABLE `votes` ADD COLUMN `storyId` INTEGER UNSIGNED NULL;

-- AddForeignKey
ALTER TABLE `votes` ADD CONSTRAINT `votes_storyId_fkey` FOREIGN KEY (`storyId`) REFERENCES `stories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
