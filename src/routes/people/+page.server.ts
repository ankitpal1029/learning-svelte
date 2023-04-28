import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import axios from "axios";

export const load = (async ({ params }) => {
  // api call which requires some secret key
  let response: any;
  try {
    response = await axios.get("https://randomuser.me/api/?results=20");
  } catch (e) {
    throw error(500, "internal server error: fetch error");
  }
  return response.data;
}) satisfies PageServerLoad;
