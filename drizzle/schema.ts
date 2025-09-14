import { pgTable, serial, text, varchar, integer } from "drizzle-orm/pg-core";

// User Profile
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  auth_id: varchar("auth_id", { length: 255 }).notNull().unique(), // Supabase user ID
  full_name: text("full_name"),
  phone: varchar("phone", { length: 50 }),
  email: varchar("email", { length: 256 }),
  address: text("address"),
  linkedin: text("linkedin"),
});

// Work Experience
export const experience = pgTable("experience", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id").references(() => users.id).notNull(), // 👈 links to users
  company: text("company"),
  role: text("role"),
  location: text("location"),
  startDate: varchar("start_date", { length: 50 }),
  endDate: varchar("end_date", { length: 50 }),
  description: text("description"),
});

// Education
export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id").references(() => users.id).notNull(), // 👈
  school: text("school"),
  degree: text("degree"),
  startYear: integer("start_year"),
  endYear: integer("end_year"),
  description: text("description"),
});

// Projects
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id").references(() => users.id).notNull(), // 👈
  title: text("title"),
  techStack: text("tech_stack"),
  description: text("description"),
});

// Skills
export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id").references(() => users.id).notNull(), // 👈
  category: text("category"),
  name: text("name"),
});

// Interests
export const interests = pgTable("interests", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id").references(() => users.id).notNull(), // 👈
  name: text("name"),
});

// Languages
export const languages = pgTable("languages", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id").references(() => users.id).notNull(), // 👈
  name: text("name"),
});

// References
export const references = pgTable("references", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id").references(() => users.id).notNull(), // 👈
  name: text("name"),
  role: text("role"),
  email: varchar("email", { length: 256 }),
  phone: varchar("phone", { length: 50 }),
  relationship: text("relationship"),
});
