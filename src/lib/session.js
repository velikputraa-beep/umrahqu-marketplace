"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "umrahqu.demo.user";
const listeners = new Set();

function emit() {
  listeners.forEach((listener) => listener());
}

function readUser() {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(STORAGE_KEY);
}

function subscribe(listener) {
  listeners.add(listener);
  window.addEventListener("storage", emit);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", emit);
  };
}

export function signIn(email) {
  window.localStorage.setItem(STORAGE_KEY, email);
  emit();
}

export function signOut() {
  window.localStorage.removeItem(STORAGE_KEY);
  emit();
}

export function useSession() {
  const user = useSyncExternalStore(subscribe, readUser, () => null);
  return { user, isSignedIn: Boolean(user) };
}
