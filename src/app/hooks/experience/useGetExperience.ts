// src/hooks/useGetExperiences.ts
"use client";

import { Experience } from "@/app/types/experience.type";
import { getExperiences } from "@/service/experience";
import { useEffect, useState } from "react";

export function useGetExperiences() {
  const [data, setData] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const exp = await getExperiences();
        setData(exp);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return { data, loading, error };
}
