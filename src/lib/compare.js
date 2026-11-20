"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "umrahqu.compare.slugs";
const MAX_COMPARE = 4;
const listeners = new Set();

function emit() {
  listeners.forEach((listener) => listener());
}

function read() {
  if (typeof window === "undefined") return "";
  return window.localStorage.getItem(STORAGE_KEY) || "";
}

function subscribe(listener) {
  listeners.add(listener);
  window.addEventListener("storage", emit);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", emit);
  };
}

function write(slugs) {
  window.localStorage.setItem(STORAGE_KEY, slugs.join(","));
  emit();
}

export function toggleCompare(slug) {
  const current = read().split(",").filter(Boolean);
  write(
    current.includes(slug)
      ? current.filter((s) => s !== slug)
      : [...current, slug].slice(-MAX_COMPARE)
  );
}

export function clearCompare() {
  write([]);
}

export function useCompare() {
  const raw = useSyncExternalStore(subscribe, read, () => "");
  const slugs = raw.split(",").filter(Boolean);
  return { slugs, isSelected: (slug) => slugs.includes(slug) };
}
