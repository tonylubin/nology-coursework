import React from "react";
import { mount } from "enzyme";
import CardBack from "./CardBack";
import beerMockData from "../../beerMockData";

describe("CardBack tests", () => {

    let wrapper;
    let mockBeer;

    beforeEach(() => {
        mockBeer = beerMockData[0];
        wrapper = mount(<CardBack description={mockBeer.description} first_brewed={mockBeer.first_brewed} ph={mockBeer.ph}
            food_pairing={mockBeer.food_pairing} ibu={mockBeer.ibu}/>);
    })

    it("should render without error", () => {
        expect(wrapper).toBeTruthy();
    })

    it("should render the correct name", () => {
        expect(wrapper.find('p.foodPairing').text()).toBe(mockBeer.description)
    })

    it("should join the items in array seperated with a comma", () => {
        expect(wrapper.find('p.pairedFood').text()).toBe("Spicy chicken tikka masala, Grilled chicken quesadilla, Caramel toffee cake")
    })
})
