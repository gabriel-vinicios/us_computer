-- CreateTable
CREATE TABLE "departments_members" (
    "id" TEXT NOT NULL,
    "id_members" TEXT NOT NULL,
    "id_departments" TEXT NOT NULL,

    CONSTRAINT "departments_members_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "departments_members" ADD CONSTRAINT "departments_members_id_members_fkey" FOREIGN KEY ("id_members") REFERENCES "members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "departments_members" ADD CONSTRAINT "departments_members_id_departments_fkey" FOREIGN KEY ("id_departments") REFERENCES "departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
