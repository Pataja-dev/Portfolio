"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/db/seed.ts
var db_1 = require("./db");
var schema_1 = require("../../drizzle/schema");
function seed() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // clear tables first (optional but useful for testing)
                return [4 /*yield*/, db_1.db.delete(schema_1.users)];
                case 1:
                    // clear tables first (optional but useful for testing)
                    _a.sent();
                    return [4 /*yield*/, db_1.db.delete(schema_1.experience)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, db_1.db.delete(schema_1.education)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, db_1.db.delete(schema_1.projects)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, db_1.db.delete(schema_1.skills)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, db_1.db.delete(schema_1.interests)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, db_1.db.delete(schema_1.languages)];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, db_1.db.delete(schema_1.references)];
                case 8:
                    _a.sent();
                    // Insert user profile
                    return [4 /*yield*/, db_1.db.insert(schema_1.users).values({
                            fullName: "John Lloyd Glee",
                            phone: "+63-951-352-0909",
                            email: "johnlloydglee26@gmail.com",
                            address: "Dampe, Floridablanca, Pampanga",
                            linkedin: "https://www.linkedin.com/in/john-lloyd-glee/",
                        })];
                case 9:
                    // Insert user profile
                    _a.sent();
                    // Work experience
                    return [4 /*yield*/, db_1.db.insert(schema_1.experience).values({
                            company: "Tito Solutions",
                            role: "Web Developer Intern",
                            location: "Remote",
                            startDate: "March 2025",
                            endDate: "May 2025",
                            description: "Contributed to an online giving platform, developed role-based access, worked with React, Next.js, Tailwind CSS, Supabase, and JIRA in SCRUM cycles.",
                        })];
                case 10:
                    // Work experience
                    _a.sent();
                    // Education
                    return [4 /*yield*/, db_1.db.insert(schema_1.education).values([
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
                        ])];
                case 11:
                    // Education
                    _a.sent();
                    // Projects
                    return [4 /*yield*/, db_1.db.insert(schema_1.projects).values([
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
                        ])];
                case 12:
                    // Projects
                    _a.sent();
                    // Skills
                    return [4 /*yield*/, db_1.db.insert(schema_1.skills).values([
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
                        ])];
                case 13:
                    // Skills
                    _a.sent();
                    // Interests
                    return [4 /*yield*/, db_1.db.insert(schema_1.interests).values([
                            { name: "Backend and full-stack development" },
                            { name: "Writing clean and efficient code" },
                            { name: "Solving logical and technical problems" },
                            { name: "Exploring programming frameworks" },
                        ])];
                case 14:
                    // Interests
                    _a.sent();
                    // Languages
                    return [4 /*yield*/, db_1.db.insert(schema_1.languages).values([
                            { name: "English" },
                            { name: "Filipino" },
                            { name: "Iloco" },
                            { name: "Kapampangan" },
                        ])];
                case 15:
                    // Languages
                    _a.sent();
                    // Reference
                    return [4 /*yield*/, db_1.db.insert(schema_1.references).values({
                            name: "Noreen B. Miranda",
                            role: "MIS – Northern Luzon Adventist College",
                            email: "noreenbmiranda@gmail.com",
                            phone: "+63 917-540-5541",
                            relationship: "Teacher/Instructor",
                        })];
                case 16:
                    // Reference
                    _a.sent();
                    console.log("✅ Seed completed!");
                    process.exit(0);
                    return [2 /*return*/];
            }
        });
    });
}
seed().catch(function (err) {
    console.error("❌ Seed failed", err);
    process.exit(1);
});
