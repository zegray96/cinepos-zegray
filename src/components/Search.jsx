import React, { useState, useEffect } from "react";

import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Link, useNavigate } from "react-router-dom";

export default function Search({ visibleSearch, setVisibleSearch }) {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");

  const searchClick = () => {
    if (searchText) {
      setVisibleSearch(false);
      navigate(`/articles/search/${searchText}`);
      setSearchText("");
    }else{
      setVisibleSearch(false);
      navigate(`/articles`);
      setSearchText("");
    }
  };
  return (
    <Sidebar
      visible={visibleSearch}
      position="top"
      onHide={() => setVisibleSearch(false)}
    >
      <div className="row justify-content-center">
        <div className="col-12 md:col-6">
          <div className="p-inputgroup">
            <InputText
              placeholder="Buscar"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button
              icon="pi pi-search"
              className="p-button-info"
              onClick={searchClick}
            />
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
