import React from "react";
import CommentList from "../components/commentBox/CommentList";
import { mount } from "enzyme";

const comments = [{ author: "Ben", content: "hello" }];

describe("CommentList", () => {
  it("render commentlist", () => {
    const wrapper = mount(<CommentList comments={comments} />);
    expect(wrapper.find(".comment-text")).toBe("hello");
  });
});
