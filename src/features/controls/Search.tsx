import styled from 'styled-components';

import { IoSearch } from 'react-icons/io5';
import { useSearch } from './use-search';
import { ChangeEventHandler } from "react";

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

interface InputProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  type: string;
  placeholder?: string;
}

const Input = styled.input<InputProps>`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
`;

export const Search = () => {
  const [search, handleSearch] = useSearch();

  return (
    <InputContainer>
      <IoSearch />

      <Input
        type='search'
        placeholder='Search for a country...'
        onChange={handleSearch}
        value={search}
      />
    </InputContainer>
  );
};
