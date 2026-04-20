 export const API = `${import.meta.env.VITE_API_URL}/api/notes` || "http://localhost:5000/api/notes";

export const fmt = (iso) => {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
};
