// src/db/seed.ts
import "dotenv/config";
import { db } from "./db";
import {
  users,
  experience,
  education,
  projects,
  skills,
  interests,
  languages,
  resumeReferences, // ✅ renamed
} from "../../drizzle/schema";

async function seed() {
  // clear tables first (optional but useful for testing)
  await db.delete(users);
  await db.delete(experience);
  await db.delete(education);
  await db.delete(projects);
  await db.delete(skills);
  await db.delete(interests);
  await db.delete(languages);
  await db.delete(resumeReferences); // ✅ fixed name

  // Insert user profile
  await db.insert(users).values({
    auth_id: "demo-auth-id", // ✅ put Supabase auth.user.id here
    full_name: "John Lloyd Glee",
    phone: "+63-951-352-0909",
    email: "johnlloydglee26@gmail.com",
    address: "Dampe, Floridablanca, Pampanga",
    linkedin: "https://www.linkedin.com/in/john-lloyd-glee/",
  });

  // Work experience
  await db.insert(experience).values({
    company: "Tito Solutions",
    role: "Web Developer Intern",
    location: "Remote",
    startDate: "March 2025",
    endDate: "May 2025",
    description:
      "Contributed to an online giving platform, developed role-based access, worked with React, Next.js, Tailwind CSS, Supabase, and JIRA in SCRUM cycles.",
  });

  // Education
  await db.insert(education).values([
    {
      school: "Northern Luzon Adventist College",
      degree: "Bachelor of Science in Information Technology",
      startYear: 2021,
      endYear: 2025,
      description: "",
    },
    {
      school: "Guagua National Colleges",
      degree: "Senior High School: STEM Strand",
      startYear: 2017,
      endYear: 2019,
      description: "",
    },
    {
      school: "Central Luzon Adventist Academy",
      degree: "Junior High School",
      startYear: 2013,
      endYear: 2017,
      description: "",
    },
  ]);

  // Projects
  await db.insert(projects).values([
    {
      title: "LMS for ALS",
      techStack: "Angular, Laravel, MySQL",
      description: "Learning Management for Alternative Learning System",
    },
    {
      title: "LH100 Ecolodge Booking System",
      techStack: "Angular, Laravel, MySQL",
      description: "Booking system for an ecolodge",
    },
  ]);

  // Skills
  await db.insert(skills).values([
    {
      category: "Web Development",
      name: "HTML, CSS, Tailwind CSS, React, Next.js, Angular, Laravel",
    },
    {
      category: "Tools",
      name: "JIRA, Bitbucket, VS Code, Git, GitHub, Supabase",
    },
    {
      category: "Databases & Backend",
      name: "MySQL, PostgreSQL, Supabase",
    },
    {
      category: "Soft Skills",
      name: "Collaboration, Adaptability, Communication, Time Management",
    },
  ]);

  // Interests
  await db.insert(interests).values([
    { name: "Backend and full-stack development" },
    { name: "Writing clean and efficient code" },
    { name: "Solving logical and technical problems" },
    { name: "Exploring programming frameworks" },
  ]);

  // Languages
  await db.insert(languages).values([
    { name: "English" },
    { name: "Filipino" },
    { name: "Iloco" },
    { name: "Kapampangan" },
  ]);

  // Reference
  await db.insert(resumeReferences).values({
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
