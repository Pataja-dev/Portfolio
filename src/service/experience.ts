import { Experience } from "@/app/types/experience.type";

const API_URL = "/api/experience";

export async function getExperiences(): Promise<Experience[]> {
  const res = await fetch(API_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch experiences");
  return res.json();
}