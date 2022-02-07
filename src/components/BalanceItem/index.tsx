import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Container,
  BalanceIcon,
  BalanceGroup,
  BalanceTitle,
  BalanceAmount,
  BalanceDate,
} from "./styles";

interface IBalanceItem {
  type: "inflows" | "outflows" | "investments";
  title: string;
  amount: string;
  date: string;
}

const BalanceItem: React.FC<IBalanceItem> = ({ type, title, amount, date }) => {
  return (
    <Container>
      <BalanceIcon type={type}>
        {type === "inflows" ? (
          <MaterialCommunityIcons
            name="arrow-collapse-down"
            size={22}
            color="#147C18"
          />
        ) : (
          <MaterialCommunityIcons
            name="arrow-collapse-up"
            size={22}
            color={type === "outflows" ? "#F4000F" : "#F4CB00"}
          />
        )}
      </BalanceIcon>
      <BalanceGroup>
        <BalanceTitle>{title}</BalanceTitle>
        <BalanceAmount type={type}>{amount}</BalanceAmount>
      </BalanceGroup>
      <BalanceDate>{date}</BalanceDate>
    </Container>
  );
};

export default BalanceItem;
