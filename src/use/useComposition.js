import { ref } from "@vue/composition-api";

let greeting = ref("Hi there");

export const useComposition = () => {
  return {
    greeting,
  };
};
