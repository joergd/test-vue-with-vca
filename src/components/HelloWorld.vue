<template>
  <div class="hello">
    <h1>{{ _composition.greeting.value }}</h1>
  </div>
</template>

<script>
import { useComposition } from "../use/useComposition";

export default {
  name: "HelloWorld",
  setup() {
    let _composition = useComposition();

    return {
      _composition,
    };
  },
};
</script>
