import { writable, type Writable } from "svelte/store";

export const input: Writable<string> = writable("I remember everything");
