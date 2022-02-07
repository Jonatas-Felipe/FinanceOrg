import React, { useCallback } from 'react';
import { ViewProps } from 'react-native';

import {
  Container,
  RadioButton,
  InputGroup,
  RadioBox,
  RadioCheck,
  Label,
} from './styles';

interface IOption {
  id: string | number | boolean;
  value: string;
  selected: boolean;
}

interface IFilterBoxProps extends ViewProps {
  options: IOption[];
  onSelect?(option: IOption): void;
}

const FilterBox: React.FC<IFilterBoxProps> = ({
  options,
  onSelect,
  ...rest
}) => {
  const handleSelectOption = useCallback(
    option => {
      if (onSelect) {
        onSelect(option);
      }
    },
    [onSelect],
  );

  return (
    <Container {...rest}>
      {options.map((option, index) => (
        <RadioButton
          key={option.id as React.Key}
          onPress={() => handleSelectOption(option)}
        >
          <InputGroup
            firstOption={index === 0}
            lastOption={options.length === index + 1}
          >
            <RadioBox>
              <RadioCheck selected={option.selected} />
            </RadioBox>
            <Label>{option.value}</Label>
          </InputGroup>
        </RadioButton>
      ))}
    </Container>
  );
};

export default FilterBox;
