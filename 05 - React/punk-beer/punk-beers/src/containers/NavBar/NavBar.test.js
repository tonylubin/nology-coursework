import React from "react";
import { shallow } from "enzyme";
import NavBar from "./NavBar";
import SearchBox from "../../components/SearchBox";
import FiltersList from "../../components/FiltersList";

describe("Navigation bar tests", () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavBar />)
    })

    it("should render without error", () => {
        expect(wrapper).toBeTruthy();
    })

    it("should render 2 imported child components", () => {
        expect(wrapper.contains(<FiltersList/> && <SearchBox/>)).toEqual(true);
    })
})