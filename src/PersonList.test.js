import React from "react";
import { shallow } from "enzyme";
import PersonList from "./PersonList";

describe("PersonList", () => {
  it("renders a ul element", () => {
    const personListWrapper = shallow(<PersonList />);
    // We want to create an unordered list inside personList
    const peopleListUls = personListWrapper.find("ul");

    expect(peopleListUls).toHaveLength(1);
  });

  // Zero case
  it("renders no li elements when no people exist", () => {
    const people = [];
    const personListWrapper = shallow(<PersonList people={people} />);
    const peopleListItems = personListWrapper.find("li");

    expect(peopleListItems).toHaveLength(0);
  });

  // 1 case
  it("renders one li element when one person exists", () => {
    const people = [{ firstName: "Alan", lastName: "Turing" }];
    const personListWrapper = shallow(<PersonList people={people} />);
    const peopleListItems = personListWrapper.find("li");

    expect(peopleListItems).toHaveLength(1);
  });

  // M case
  it("renders one li element for each person that exists", () => {
    const people = [
      { firstName: "Alan", lastName: "Turing" },
      { firstName: "Chevy", lastName: "Chase" },
    ];
    const personListWrapper = shallow(<PersonList people={people} />);
    const peopleListItems = personListWrapper.find("li");

    expect(peopleListItems).toHaveLength(2);
  });

  it("renders the first and last name of a person", () => {
    const people = [{ firstName: "Jane", lastName: "Curtin" }];
    const personListWrapper = shallow(<PersonList people={people} />);

    expect(personListWrapper.find("li").text()).toContain(people[0].firstName);
    expect(personListWrapper.find("li").text()).toContain(people[0].lastName);
  });
});
