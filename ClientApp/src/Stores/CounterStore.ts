import { localStorage, persist } from "@macfja/svelte-persistent-store";
import { writable } from "svelte/store";

export const count = persist( writable( 0 ), localStorage(), "count" );