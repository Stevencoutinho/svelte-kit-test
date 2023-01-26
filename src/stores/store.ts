import { writable } from "svelte/store";

export const users = writable<{ date: string; nickname: string; emissions: number }[]>([
  { date: "2022/10/10", nickname: "サンプル男1", emissions: 10 },
  { date: "2022/11/11", nickname: "サンプル男2", emissions: 35 },
  { date: "2022/12/12", nickname: "サンプル男3", emissions: 35 },
]);
