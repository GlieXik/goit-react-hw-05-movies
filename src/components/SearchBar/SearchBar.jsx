import { useState } from "react";
import * as SC from "./SearchBar.styled";

const SearchBar = ({ handleSubmit }) => {
  return (
    <>
      <SC.Form autoComplete="off" onSubmit={handleSubmit}>
        <SC.Input type="search" placeholder="Search.." name="search" />
        <SC.Button type="submit">Search</SC.Button>
      </SC.Form>
    </>
  );
};
export default SearchBar;
