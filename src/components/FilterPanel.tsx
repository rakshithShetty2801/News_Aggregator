import React, { useState } from "react";
import "../styles/global.scss";

interface FilterProps {
  onFilterChange: (filters: {
    keyword: string;
    category: string;
    dateRange: string;
  }) => void;
}

const FilterPanel: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [dateRange, setDateRange] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange({ keyword, category, dateRange });
  };

  return (
    <form className="filter-panel" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="date"
        value={dateRange}
        onChange={(e) => setDateRange(e.target.value)}
      />
      <button type="submit">Apply Filters</button>
    </form>
  );
};

export default FilterPanel;
