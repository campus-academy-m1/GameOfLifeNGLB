import { expect } from "chai";
import { mount, shallowMount } from "@vue/test-utils";
import functions from "../../src/scripts/functions";

describe("App.vue", () => {
  it("test fonction getRndColor", () => {
    const wrapper = mount(functions);
    var color = wrapper.vm.getRndColor();
    expect(color).to.include("#");
  });
  //   it("test fonction getRandomInteger", () => {
  //     const wrapper = mount(App);
  //     var random = wrapper.vm.getRandomInteger("1", "1");
  //     expect(random).to.include(1);
  //   });
  //   it("test fonction generateGrid", () => {
  //     const wrapper = mount(App);
  //     var random = wrapper.vm.generateGrid();
  //   });
  //   it("test fonction generateGrid", () => {
  //     const wrapper = mount(App);
  //     var random = wrapper.vm.intervalFunction();
  //   });
  //   it("test fonction play", () => {
  //     const wrapper = mount(App);
  //     var random = wrapper.vm.play();
  //   });
  //   it("test fonction clear", () => {
  //     const wrapper = mount(App);
  //     var random = wrapper.vm.clear();
  //   });
});
