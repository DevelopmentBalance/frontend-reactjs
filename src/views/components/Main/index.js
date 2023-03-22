import React from "react";

import logo from "views/assets/icons/logo.svg";

import * as S from "./styles";

const Main = ({
  state,
  listContent = [],
  setState,
  onClick,
  disable,
  loading,
  ...restProps
}) => (
  <S.MainContent
    onClick={() => {
      setState(!state);
    }}
    state={state}
    {...restProps}
  >
    <S.Logo src={logo} />
    <S.List>
      {listContent.length &&
        listContent.map((element, index) => (
          <S.ListELement
            key={index}
            state={state}
            onClick={(e) => {
              if (state) {
                element.onClick(e);
              }
            }}
          >
            {state && <p>{element?.name}</p>}
            {!state && <S.Icon src={element?.icon} />}
          </S.ListELement>
        ))}
    </S.List>

    {state && (
      <S.Footer>
        © Todos os direitos reservados. <br />
        Balance, desde 2021.
      </S.Footer>
    )}
  </S.MainContent>
);

export { Main };
