"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.references = exports.languages = exports.interests = exports.skills = exports.projects = exports.education = exports.experience = exports.users = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
// User Profile
exports.users = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    fullName: (0, pg_core_1.text)("full_name"),
    phone: (0, pg_core_1.varchar)("phone", { length: 50 }),
    email: (0, pg_core_1.varchar)("email", { length: 256 }),
    address: (0, pg_core_1.text)("address"),
    linkedin: (0, pg_core_1.text)("linkedin"),
});
// Work Experience
exports.experience = (0, pg_core_1.pgTable)("experience", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    company: (0, pg_core_1.text)("company"),
    role: (0, pg_core_1.text)("role"),
    location: (0, pg_core_1.text)("location"),
    startDate: (0, pg_core_1.varchar)("start_date", { length: 50 }),
    endDate: (0, pg_core_1.varchar)("end_date", { length: 50 }),
    description: (0, pg_core_1.text)("description"),
});
// Education
exports.education = (0, pg_core_1.pgTable)("education", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    school: (0, pg_core_1.text)("school"),
    degree: (0, pg_core_1.text)("degree"),
    startYear: (0, pg_core_1.integer)("start_year"),
    endYear: (0, pg_core_1.integer)("end_year"),
    description: (0, pg_core_1.text)("description"),
});
// Projects
exports.projects = (0, pg_core_1.pgTable)("projects", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    title: (0, pg_core_1.text)("title"),
    techStack: (0, pg_core_1.text)("tech_stack"),
    description: (0, pg_core_1.text)("description"),
});
// Skills
exports.skills = (0, pg_core_1.pgTable)("skills", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    category: (0, pg_core_1.text)("category"),
    name: (0, pg_core_1.text)("name"),
});
// Interests
exports.interests = (0, pg_core_1.pgTable)("interests", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.text)("name"),
});
// Languages
exports.languages = (0, pg_core_1.pgTable)("languages", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.text)("name"),
});
// References
exports.references = (0, pg_core_1.pgTable)("references", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.text)("name"),
    role: (0, pg_core_1.text)("role"),
    email: (0, pg_core_1.varchar)("email", { length: 256 }),
    phone: (0, pg_core_1.varchar)("phone", { length: 50 }),
    relationship: (0, pg_core_1.text)("relationship"),
});
