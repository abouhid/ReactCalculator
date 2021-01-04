import React from "react";
import renderer from "react-test-renderer";
import Link from "../Link.react";

describe("Timeline", () => {
  it("passing test", () => {
    expect(true).toBeTruthy();
  });

  it("failing test", () => {
    expect(false).toBeFalsy();
  });
});
describe("Snapshot", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Link page="http://www.instagram.com">Instagram</Link>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly", () => {
    const tree = renderer
      .create(<Link page="https://prettier.io">Prettier</Link>)
      .toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <a
        className="normal"
        href="https://prettier.io"
        onMouseEnter={[Function]}
        onMouseLeave={[Function]}
      >
        Prettier
      </a>
    `);
  });
  // it('will fail every time', () => {
  //   const user = {
  //     createdAt: new Date(),
  //     id: Math.floor(Math.random() * 20),
  //     name: 'LeBron James',
  //   };
  
  //   expect(user).toMatchSnapshot();
  // });

  it('will check the values and pass', () => {
    const user = {
      createdAt: new Date(),
      name: 'Bond... James Bond',
    };
  
    expect(user).toMatchSnapshot({
      createdAt: expect.any(Date),
      name: 'Bond... James Bond',
    });
  });
});
