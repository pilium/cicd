import { mount, shallowMount } from "@vue/test-utils";
import Logo from "@/components/Logo.vue";

const factory = () => {
  return shallowMount(Logo, {});
};

describe("Logo", () => {
  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
