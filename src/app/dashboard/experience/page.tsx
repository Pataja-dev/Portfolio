"use client";

import { useGetExperiences } from "@/app/hooks/experience/useGetExperience";
import { Plus, Pencil, Trash2 } from "lucide-react";

export default function ExperiencePage() {
  const { data: experiences, loading, error } = useGetExperiences();

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Experience</h1>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Add Experience
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {experiences.length === 0 ? (
        <p className="text-neutral-500">No experience records found.</p>
      ) : (
        <ul className="space-y-6">
          {experiences.map((exp) => (
            <li
              key={exp.id}
              className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-semibold">{exp.role}</h2>
                  <p className="text-lg text-neutral-600 dark:text-neutral-300">
                    {exp.company} — {exp.location}
                  </p>
                  <p className="text-sm text-neutral-500 mt-1">
                    {exp.startDate} - {exp.endDate}
                  </p>
                  <p className="mt-3 text-neutral-700 dark:text-neutral-200">
                    {exp.description}
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="text-blue-500 hover:text-blue-600">
                    <Pencil className="w-5 h-5" />
                  </button>
                  <button className="text-red-500 hover:text-red-600">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
