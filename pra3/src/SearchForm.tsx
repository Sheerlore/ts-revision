import React from 'react';

interface SearchFormProps {
  value: string,
  onSearch: React.Dispatch<React.SetStateAction<string>>
};

export default function SearchForm({value, onSearch}: SearchFormProps) {
  return (
    <input
      value={value}
      type="text"
      onChange={event => onSearch(event.target.value)}
      placeholder="user name..."
      required
    />
  );
}