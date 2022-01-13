import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";
import beerMockData from "../../beerMockData";
import CardFront from "../CardFront";
import CardBack from "../CardBack";

describe("Card tests", () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Card beersSearched={beerMockData}/>)
    })

    it("should render without error", () => {
        expect(wrapper).toBeTruthy();
    })

    it("should render CardFront component multiplied by amount of beers in array", () => {
        expect(wrapper.find(CardFront).length).toEqual(beerMockData.length);
    });

    it("should render CardBack component multiplied by amount of beers in array", () => {
        expect(wrapper.find(CardBack).length).toEqual(beerMockData.length);
    });
})