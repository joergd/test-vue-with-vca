import { ref } from "@vue/composition-api";

// I need this declared outside the composition function
// as this will act like a shared "global" for multiple
// components that need access to this same value.
// Some components can change this value.
// This works flawlessly in the browser.
// But when it comes to testing, the VCA is not yet attached
// to the Vue instance...
let greeting = ref("Hi there");

export const useComposition = () => {
  return {
    greeting,
  };
};
