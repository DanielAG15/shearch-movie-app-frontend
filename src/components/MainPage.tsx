import FormSearch from "./FormShearch";
import Movies from "./Movies";

/**
 * The MainPage function returns a FormSearch component and a Movies component.
 * @returns The `MainPage` component is being returned, which consists of the `FormSearch` and `Movies`
 * components wrapped in a fragment.
 */
const MainPage: React.FC = () => {
  return (
    <>
      <FormSearch />
      <Movies />
    </>
  );
};

export default MainPage;
