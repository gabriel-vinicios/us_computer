-- DropForeignKey
ALTER TABLE "departments_members" DROP CONSTRAINT "departments_members_id_departments_fkey";

-- DropForeignKey
ALTER TABLE "departments_members" DROP CONSTRAINT "departments_members_id_members_fkey";

-- AlterTable
ALTER TABLE "departments_members" ALTER COLUMN "id_members" DROP NOT NULL,
ALTER COLUMN "id_departments" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "departments_members" ADD CONSTRAINT "departments_members_id_members_fkey" FOREIGN KEY ("id_members") REFERENCES "members"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "departments_members" ADD CONSTRAINT "departments_members_id_departments_fkey" FOREIGN KEY ("id_departments") REFERENCES "departments"("id") ON DELETE SET NULL ON UPDATE CASCADE;
