import React from "react";
import { shallow } from "enzyme";
import Main from "./Main";
import beerMockData from "../../beerMockData";

describe("Main component tests", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Main beersSearched={beerMockData}/>)
    })

    it("should render without error", () => {
        expect(wrapper).toBeTruthy();
    })

    it("should accept props", () => {
        expect(wrapper.find('Card').prop('beersSearched')).toBe(beerMockData)
    })
})