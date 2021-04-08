import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

// import "@/plugins/compositionApi";

describe("HelloWorld.vue", () => {
  it("renders greeting", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.text()).toMatch("Hi there");
  });
});
