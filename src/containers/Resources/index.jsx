import React from "react";
import SearchBar from "../../components/SearchBar";
import NgoList from "../../components/NgoList";
import AdvancedFilters from "../../components/AdvancedFilters";
import PagesList from "../../components/PagesList";
import "./index.css";
import allNgos from "../../components/NgoList/allNgos";

const Resources = () => {
  return (
    <div>
      <SearchBar />
      <div className="d-flex justify-content-between">
        <AdvancedFilters />
        <NgoList />
      </div>
      <PagesList />
    </div>
  );
};

export default Resources;
