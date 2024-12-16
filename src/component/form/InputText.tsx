/**
 * @copyright Copyright 2024. CJ OliveNetworks Co. all rights reserved.
 * @file component/commons/core/form/InputText.tsx
 * @description InputText Component
 * @author Canal Frame
 * @since 2023.09.25
 * ---------------------------------------------------------------------
 * Date                     AUTHOR                  MAJOR_ISSUE
 * ---------------------------------------------------------------------
 * 2023.09.25        				Canal Frame        			신규 생성
 */

// Antd items
import { Form, Input } from 'antd';

// Types
import { FormProps, InputTextProps } from '@/types/inputType';

interface Props extends InputTextProps {
  disabledFields?: any;
  subLabel?: string;
  [key: string]: any;
}

const InputText = (props: Props) => {
  /**
   * =====================================================================
   *  변수 선언부
   * =====================================================================
   */
  const {
    label,
    name,
    required = false,
    maxLength,
    disabled = false,
    showCount = false,
    size = 'middle',
    placeholder,
    value,
    onChange,
    onPressEnter,
    allowClear,
    rules,
    readOnly,
    prefix,
    suffix,
    format,
    isWord = false,
    // onInput,
    // onBeforeInput,
    disabledFields,
    // onFocus,
    // onBlur,
    subLabel,
  } = props;

  const inputProps = (format: any) => {
    switch (format) {
      //KeyUp, KeyDown 등 Keyboard 이벤트에서 한글입력에 대한 인지를 잘 하지못하고 있어서 onInput을 추가함
      //전화번호
      case 'phone':
        return {
          onInput: (event: any) => {
            if (!/^[0-9]+$/.test(event.target.value)) {
              event.preventDefault();
              event.target.value = event.target.value.replace(/[^0-9]+/g, '');
            }
          },
        };
      //숫자만
      case 'number':
        return {
          onInput: (event: any) => {
            if (!/^[0-9]+$/.test(event.target.value)) {
              event.preventDefault();
              event.target.value = event.target.value.replace(/[^0-9]+/g, '');
            }
          },
        };
      //특수문자 제외
      case 'notSpecial':
        return {
          onInput: (event: any) => {
            if (!/^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+$/.test(event.target.value)) {
              event.preventDefault();
              event.target.value = event.target.value.replace(
                /[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+/g,
                ''
              );
            }
          },
        };
      //영어, 숫자만
      case 'onlyEnNum':
        return {
          onInput: (event: any) => {
            if (!/^[a-zA-Z0-9]+$/.test(event.target.value)) {
              event.preventDefault();
              event.target.value = event.target.value.replace(
                /[^a-zA-Z0-9]+/g,
                ''
              );
            }
          },
        };
      //영어, 숫자, /만
      case 'onlyEnNumSlash':
        return {
          onInput: (event: any) => {
            if (!/^[a-zA-Z0-9/]+$/.test(event.target.value)) {
              event.preventDefault();
              event.target.value = event.target.value.replace(
                /[^a-zA-Z0-9]+/g,
                ''
              );
            }
          },
        };
      //숫자만
      case 'price':
        return {
          onInput: (event: any) => {
            if (!/^[0-9]+$/.test(event.target.value)) {
              event.preventDefault();
              event.target.value = event.target.value.replace(/[^0-9]+/g, '');
            }
          },
        };
      // 한글만
      case 'onlyKr':
        return {
          onInput: (event: any) => {
            if (!/^[ㄱ-ㅎㅏ-ㅣ가-힣]+$/.test(event.target.value)) {
              event.preventDefault();
              event.target.value = event.target.value.replace(
                /[^ㄱ-ㅎㅏ-ㅣ가-힣]+/g,
                ''
              );
            }
          },
        };
      // 영어만
      case 'onlyEn':
        return {
          onInput: (event: any) => {
            if (!/^[a-zA-Z]+$/.test(event.target.value)) {
              event.preventDefault();
              event.target.value = event.target.value.replace(
                /[^a-zA-Z]+/g,
                ''
              );
            }
          },
        };

      // 한글+영어만
      case 'onlyKrEn':
        return {
          onInput: (event: any) => {
            if (!/^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]+$/g.test(event.target.value)) {
              event.preventDefault();
              event.target.value = event.target.value.replace(
                /[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]+/g,
                ''
              );
            }
          },
        };
      // 이메일
      case 'email':
        return {
          onInput: (event: any) => {
            event.target.value = event.target.value.replace(
              /[^a-zA-Z0-9@._-]+/g,
              ''
            );
          },
        };
      // 한자
      case 'onlyCn':
        return {
          onInput: (event: any) => {
            if (!/^[\u4E00-\u9FFF]*$/.test(event.target.value)) {
              event.preventDefault();
              event.target.value = event.target.value.replace(
                /[^ \u4E00-\u9FFF]/g,
                ''
              );
            }
          },
        };
      // 한자 + 영어
      case 'onlyCnEn':
        return {
          onInput: (event: any) => {
            if (!/^[\u4E00-\u9FFFA-Za-z]*$/.test(event.target.value)) {
              event.preventDefault();
              event.target.value = event.target.value.replace(
                /[^ \u4E00-\u9FFFA-Za-z]/g,
                ''
              );
            }
          },
        };
      default:
    }
  };

  const formProps: FormProps = {
    label: label,
    name: name,
    required: required,
    rules: rules,
    colon: props.colon ?? true,
  };
  const isDisabled = disabledFields || disabled;
  const textEncoder = new TextEncoder();
  return (
    <Form.Item {...formProps}>
      {subLabel !== undefined && <p className="sub-label">{subLabel}</p>}
      <Input
        {...props}
        {...inputProps(format)}
        disabled={isDisabled}
        maxLength={maxLength}
        placeholder={placeholder}
        showCount={showCount}
        size={size}
        value={value}
        onChange={onChange}
        onPressEnter={onPressEnter}
        required={required}
        allowClear={allowClear}
        readOnly={readOnly}
        suffix={suffix}
        prefix={prefix}
        count={{
          show: (value) =>
            showCount &&
            (!isWord
              ? `${value.value.length}자 (${
                  textEncoder.encode(value.value).length
                } / ${props.maxLength}byte)`
              : `${value.value.length}자 (${value.value.length} / ${props.maxLength}자)`),
          strategy: (txt) =>
            !isWord ? textEncoder.encode(txt).length : txt.length,
          max: props.maxLength,
          exceedFormatter: (txt) =>
            !isWord
              ? txt.slice(
                  0,
                  new TextDecoder().decode(
                    new TextEncoder().encode(txt).slice(0, props.maxLength)
                  ).length - 1
                )
              : txt.slice(0, props.maxLength - 1),
        }}
      />
      {/* {props.children} */}
    </Form.Item>
  );
};

export default InputText;
