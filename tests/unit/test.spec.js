import { expect } from "chai";
import { mount, shallowMount } from "@vue/test-utils";
import App from "../../src/App.vue";

describe("App.vue", () => {
  it("test du titre", () => {
    const msg = "Devops GameOfLife Nicolas Gerard - Lucas Brocheton";
    const wrapper = shallowMount(App, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
  it("test fonction getRndColor", () => {
    const wrapper = mount(App);
    var color = wrapper.vm.getRndColor();
    expect(color).to.include("#");
  });
  it("test fonction getRandomInteger", () => {
    const wrapper = mount(App);
    var random = wrapper.vm.getRandomInteger("1", "1");
    expect(random).to.include(1);
  });
  it("test fonction generateGrid", () => {
    const wrapper = mount(App);
    var random = wrapper.vm.generateGrid();
  });
  it("test fonction generateGrid", () => {
    const wrapper = mount(App);
    var random = wrapper.vm.intervalFunction();
  });
  it("test fonction play", () => {
    const wrapper = mount(App);
    var random = wrapper.vm.play();
  });
  it("test fonction clear", () => {
    const wrapper = mount(App);
    var random = wrapper.vm.clear();
  });
});
