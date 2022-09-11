import * as SC from "./SearchBar.styled";

const SearchBar = ({ handleSubmit }) => {
  return (
    <>
      <SC.Form autoComplete="off" onSubmit={handleSubmit}>
        <SC.Input type="text" placeholder="Search.." name="search" />
        <SC.Button type="submit">Search</SC.Button>
      </SC.Form>
    </>
  );
};
export default SearchBar;
