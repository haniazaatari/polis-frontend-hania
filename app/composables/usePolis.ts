export function usePolis() {
  const api = "http://localhost:5000";

  async function getHealth() {
    try {
      const res = await $fetch(`${api}/health`, { method: "GET" });
      return res;
    } catch (err) {
      console.error("Health check failed:", err);
      return null;
    }
  }

  return { getHealth };
}
