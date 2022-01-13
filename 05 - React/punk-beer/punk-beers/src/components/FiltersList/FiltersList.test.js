import React from "react";
import { mount, shallow } from "enzyme";
import FiltersList from "./FiltersList";
import FilterItem from "../FilterItem";

describe("FiltersList tests", () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = mount(<FiltersList />);
  });

  it("should render without error", () => {
    expect(wrapper).toBeTruthy();
  });

  it("check if child renders 3 times", () => {
    expect(wrapper.find(FilterItem).length).toEqual(3);
  });

  it("should call function when checkbox is clicked", () => {
    let mockfn = jest.fn();
    let component = shallow(<FilterItem checkboxFunc={mockfn}/>);

    component.find('input').simulate('change');
    expect(mockfn).toHaveBeenCalled();
  })

});
