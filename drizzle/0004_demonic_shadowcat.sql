ALTER TABLE "experience" DROP CONSTRAINT "experience_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "experience" ALTER COLUMN "user_id" SET DATA TYPE varchar(255);