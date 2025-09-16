// src/db/seed.ts
import "dotenv/config";  // ✅ ensure .env is loaded
import { db } from "./db";
import {
  users,
  experience,
  education,
  projects,
  skills,
  interests,
  languages,
  references,
} from "../../drizzle/schema";

async function seed() {
  // ⚡ Clear tables in correct dependency order
  await db.delete(experience);
  await db.delete(education);
  await db.delete(projects);
  await db.delete(skills);
  await db.delete(interests);
  await db.delete(languages);
  await db.delete(references);
  await db.delete(users);

  // ✅ Insert user
  const authId = "774579f1-6112-4a98-9726-864d15b0a8c9"; // Supabase user UUID
  const [user] = await db
    .insert(users)
    .values({
      auth_id: authId,
      full_name: "John Lloyd Glee",
      phone: "+63-951-352-0909",
      email: "johnlloydglee26@gmail.com",
      address: "Dampe, Floridablanca, Pampanga",
      linkedin: "https://www.linkedin.com/in/john-lloyd-glee/",
    })
    .returning();

  const userID = user.id; // ✅ dynamically get the integer id

  // ✅ Work Experience
  await db.insert(experience).values({
    user_id: userID,
    company: "Tito Solutions",
    role: "Web Developer Intern",
    location: "Remote",
    startDate: "March 2025",
    endDate: "May 2025",
    description:
      "Contributed to an online giving platform, developed role-based access, worked with React, Next.js, Tailwind CSS, Supabase, and JIRA in SCRUM cycles.",
  });

  // ✅ Education
  await db.insert(education).values([
    {
      user_id: userID,
      school: "Northern Luzon Adventist College",
      degree: "Bachelor of Science in Information Technology",
      startYear: 2021,
      endYear: 2025,
      description: "",
    },
    {
      user_id: userID,
      school: "Guagua National Colleges",
      degree: "Senior High School: STEM Strand",
      startYear: 2017,
      endYear: 2019,
      description: "",
    },
    {
      user_id: userID,
      school: "Central Luzon Adventist Academy",
      degree: "Junior High School",
      startYear: 2013,
      endYear: 2017,
      description: "",
    },
  ]);

  // ✅ Projects
  await db.insert(projects).values([
    {
      user_id: userID,
      title: "LMS for ALS",
      techStack: "Angular, Laravel, MySQL",
      description: "Learning Management for Alternative Learning System",
    },
    {
      user_id: userID,
      title: "LH100 Ecolodge Booking System",
      techStack: "Angular, Laravel, MySQL",
      description: "Booking system for an ecolodge",
    },
  ]);

  // ✅ Skills
  await db.insert(skills).values([
    {
      user_id: userID,
      category: "Web Development",
      name: "HTML, CSS, Tailwind CSS, React, Next.js, Angular, Laravel",
    },
    {
      user_id: userID,
      category: "Tools",
      name: "JIRA, Bitbucket, VS Code, Git, GitHub, Supabase",
    },
    {
      user_id: userID,
      category: "Databases & Backend",
      name: "MySQL, PostgreSQL, Supabase",
    },
    {
      user_id: userID,
      category: "Soft Skills",
      name: "Collaboration, Adaptability, Communication, Time Management",
    },
  ]);

  // ✅ Interests
  await db.insert(interests).values([
    { user_id: userID, name: "Backend and full-stack development" },
    { user_id: userID, name: "Writing clean and efficient code" },
    { user_id: userID, name: "Solving logical and technical problems" },
    { user_id: userID, name: "Exploring programming frameworks" },
  ]);

  // ✅ Languages
  await db.insert(languages).values([
    { user_id: userID, name: "English" },
    { user_id: userID, name: "Filipino" },
    { user_id: userID, name: "Iloco" },
    { user_id: userID, name: "Kapampangan" },
  ]);

  // ✅ References
  await db.insert(references).values({
    user_id: userID,
    name: "Noreen B. Miranda",
    role: "MIS – Northern Luzon Adventist College",
    email: "noreenbmiranda@gmail.com",
    phone: "+63 917-540-5541",
    relationship: "Teacher/Instructor",
  });

  console.log("✅ Seed completed!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seed failed", err);
  process.exit(1);
});
