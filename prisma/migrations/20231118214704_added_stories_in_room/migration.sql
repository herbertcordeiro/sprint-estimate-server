-- AlterTable
ALTER TABLE `stories` ADD COLUMN `roomId` INTEGER UNSIGNED NULL;

-- AddForeignKey
ALTER TABLE `stories` ADD CONSTRAINT `stories_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `rooms`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
