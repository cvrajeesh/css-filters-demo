import React, { useState } from "react";
/** @jsx jsx */
import { jsx, SerializedStyles } from "@emotion/core";
import InstagramFilters from "./InstagramFilters";
import CSSTransitionGroup from "react-addons-css-transition-group";

export type FilterType = { name: string; style: SerializedStyles };
type ImageFiltersProps = {
  imageUrl?: string;
  onFilterSelected?: (filter: FilterType) => void;
};

const ImageFilters: React.FC<ImageFiltersProps> = props => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { imageUrl, onFilterSelected } = props;

  const handleFilterSelect = (filter: FilterType, index: number) => {
    setActiveIndex(index);
    if (onFilterSelected) {
      onFilterSelected(filter);
    }
  };

  return (
    <div className="filter-scroller">
      {InstagramFilters.map((filter, index) => (
        <div
          key={filter.name}
          className={activeIndex === index && imageUrl ? "active" : ""}
          onClick={() => handleFilterSelect(filter, index)}
        >
          <span className="flex-shrink-0 text-xs py-2 text-gray-300">
            {filter.name}
          </span>
          <CSSTransitionGroup className="flex-1" transitionName="shrink">
            {imageUrl && (
              <img
                className="max-w-full max-h-full object-contain"
                css={filter.style}
                alt={`Filter ${filter.name}`}
                src={props.imageUrl}
              />
            )}
          </CSSTransitionGroup>
        </div>
      ))}
    </div>
  );
};

export default ImageFilters;
