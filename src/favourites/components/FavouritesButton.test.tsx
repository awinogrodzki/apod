import * as React from "react";
import { shallow } from "enzyme";
import { FavouritesButton } from "./FavouritesButton";

describe("FavouritesButton", () => {
  it("should call on toggle handler with false if input checked attribute changed to false", () => {
    const onToggleHandler = jest.fn();
    const wrapper = shallow(
      <FavouritesButton defaultChecked={false} onToggle={onToggleHandler} />
    );

    wrapper.find("input").simulate("change", { target: { checked: false } });

    expect(onToggleHandler).toHaveBeenCalledWith(false);
  });

  it("should call on toggle handler with true if input checked attribute changed to true", () => {
    const onToggleHandler = jest.fn();
    const wrapper = shallow(
      <FavouritesButton defaultChecked={false} onToggle={onToggleHandler} />
    );

    wrapper.find("input").simulate("change", { target: { checked: true } });

    expect(onToggleHandler).toHaveBeenCalledWith(true);
  });

  it("should set default input checked value to false", () => {
    const wrapper = shallow(
      <FavouritesButton defaultChecked={false} onToggle={jest.fn()} />
    );

    expect(wrapper.find("input").prop("defaultChecked")).toBe(false);
  });

  it("should set default input checked value to true", () => {
    const wrapper = shallow(
      <FavouritesButton defaultChecked={true} onToggle={jest.fn()} />
    );

    expect(wrapper.find("input").prop("defaultChecked")).toBe(true);
  });
});
