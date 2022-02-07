import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
} from 'react';
import { TextInputProps } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useField } from '@unform/core';

import { Container, Label, Group, TextInput, Button } from './styles';

interface IInputProps extends TextInputProps {
  label?: string;
  name: string;
  icon?: string;
  showIcon?: boolean;
  disabled?: boolean;
}

interface InputValueReference {
  value: string;
}

interface IInputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<IInputRef, IInputProps> = (
  { name, label, style, secureTextEntry, disabled, showIcon, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);
  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
  const [showPassword, setShowPassword] = useState(false);

  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handlePress = useCallback(() => {
    setShowPassword(state => !state);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(_, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNariveProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container
      pointerEvents={disabled ? 'none' : 'auto'}
      style={style}
      isFocused={isFocused}
      isErrored={!!error}
    >
      {label && <Label>{label}</Label>}
      <Group>
        <TextInput
          ref={inputElementRef}
          secureTextEntry={secureTextEntry && !showPassword}
          keyboardAppearance="dark"
          placeholderTextColor="#666360"
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={value => {
            inputValueRef.current.value = value;
          }}
          {...rest}
        />
        {secureTextEntry && (
          <Button
            onPress={handlePress}
            show={typeof showIcon === 'boolean' ? showIcon : true}
          >
            {!showPassword ? (
              <Entypo name="eye" size={24} color="#BFBFBF" />
            ) : (
              <Entypo name="eye-with-line" size={24} color="#BFBFBF" />
            )}
          </Button>
        )}
      </Group>
    </Container>
  );
};

export default forwardRef(Input);
