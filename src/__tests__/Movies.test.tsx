import Movies from "../components/Movies";
import ItemMovie from "../components/ItemMovie";
import { shallow } from "enzyme";

// Tests that the Movies component renders an ItemMovie component for each item in the data array.
it("test_movies_component_renders_item_movie_for_each_item_in_data_array", () => {
  const data = [
    {
      imdbID: "1",
      Title: "Movie 1",
      Type: "movie",
      Year: "2021",
      Poster: "poster1.jpg",
    },
    {
      imdbID: "2",
      Title: "Movie 2",
      Type: "movie",
      Year: "2020",
      Poster: "poster2.jpg",
    },
  ];
  const wrapper = shallow(<Movies />);
  wrapper.setContext({ isLoading: false, data: data });
  expect(wrapper.find(ItemMovie)).toHaveLength(2);
});

// Tests that the Movies component renders nothing when the data array is empty.
it("test_movies_component_renders_nothing_when_data_is_empty", () => {
  const wrapper = shallow(<Movies />);
  wrapper.setContext({ isLoading: false, data: [] });
  expect(wrapper.find(ItemMovie)).toHaveLength(0);
});
