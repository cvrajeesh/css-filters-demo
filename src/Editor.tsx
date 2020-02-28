import React, { useState } from "react";
import ImageFilters, { FilterType } from "./ImageFilters";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import CSSTransitionGroup from "react-addons-css-transition-group";
import ImageSelector from "./ImageSelector";

const Editor: React.FC = props => {
  const [filter, setFilter] = useState<FilterType>();
  const [imageUrl, setImageUrl] = useState<string | undefined>();

  const handleFilterSelected = (filter: FilterType) => {
    setFilter(filter);
  };

  const handleImageClose = () => {
    setImageUrl(undefined);
  };

  const handleImageSelect = (url: string) => {
    setImageUrl(url);
  };

  return (
    <div className="editor-area">
      <CSSTransitionGroup transitionName="shrink">
        {!imageUrl && <ImageSelector onImageSelect={handleImageSelect} />}
        {imageUrl && (
          <React.Fragment>
            <img
              src={imageUrl}
              className="main-image"
              css={filter?.style}
              alt=""
            />
            <div
              className="absolute top-0 right-0 lg:mt-4 lg:mr-4 w-10 h-10 p-1 rounded-full shadow-lg bg-red-600 text-red-100 cursor-pointer"
              onClick={handleImageClose}
            >
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </React.Fragment>
        )}
      </CSSTransitionGroup>
      <ImageFilters
        imageUrl={imageUrl}
        onFilterSelected={handleFilterSelected}
      />
    </div>
  );
};

export default Editor;
