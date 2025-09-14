CREATE TABLE "education" (
	"id" serial PRIMARY KEY NOT NULL,
	"school" text,
	"degree" text,
	"start_year" integer,
	"end_year" integer,
	"description" text
);
--> statement-breakpoint
CREATE TABLE "experience" (
	"id" serial PRIMARY KEY NOT NULL,
	"company" text,
	"role" text,
	"location" text,
	"start_date" varchar(50),
	"end_date" varchar(50),
	"description" text
);
--> statement-breakpoint
CREATE TABLE "interests" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text
);
--> statement-breakpoint
CREATE TABLE "languages" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"tech_stack" text,
	"description" text
);
--> statement-breakpoint
CREATE TABLE "references" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"role" text,
	"email" varchar(256),
	"phone" varchar(50),
	"relationship" text
);
--> statement-breakpoint
CREATE TABLE "skills" (
	"id" serial PRIMARY KEY NOT NULL,
	"category" text,
	"name" text
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"phone" varchar(50),
	"email" varchar(256),
	"address" text,
	"linkedin" text
);
