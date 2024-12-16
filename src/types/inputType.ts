/**
 * @copyright Copyright 2024. CJ OliveNetworks Co. all rights reserved.
 * @module types/core/inputType.ts
 * @description input
 * @author Cannal Frame
 * @since 2023.09.27
 * ---------------------------------------------------------------------
 * Date                     AUTHOR                  MAJOR_ISSUE
 * ---------------------------------------------------------------------
 * 2023.09.27              Cannal Frame 			신규 생성
 */
import React, { ReactNode } from 'react';

/**
 * Form 인터페이스
 * @property {string} name name
 * @property {string} label label
 * @property {boolean} required required
 * @property {Rule[]} rules rules
 * @property {boolean} colon colon
 */
interface FormProps {
  name?: string;
  label?: string;
  required?: boolean;
  rules?: any;
  colon?: boolean;
  format?: any;
  [key: string]: any;
}

/**
 * common/input 하위 DOM의 인터페이스 정의
 * @property {number} span span
 * @property {string} id id
 * @property {string} title title
 * @property {boolean} disabled disabled
 * @property {string} placeholder placeholder
 * @property {boolean} allowClear allowClear
 * @property {string} size size
 * @property {string | number} width width
 * @property {any} value value
 * @property {any} children children
 * @property {any} onChange onChange
 * @property {any} onPressEnter onPressEnter
 */
interface InputProps extends FormProps {
  span?: number;
  id?: string;
  title?: string;
  disabled?: boolean;
  placeholder?: string;
  allowClear?: boolean;
  size?: 'large' | 'middle' | 'small';
  width?: string | number;
  value?: any;
  children?: any;
  onChange?: any;
  onPressEnter?: any;
}

/**
 * <InputText>, <InputTextArea> Props 타입 정의
 * @property {boolean | object} autoSize autoSize
 * @property {number} maxLength maxLength
 * @property {boolean} showCount showCount
 * @property {any} onPressEnter onPressEnter
 * @property {boolean} readOnly readOnly
 * @property {number} rows rows
 */
type InputTextProps = InputProps & {
  autoSize?: boolean | object;
  maxLength?: number;
  showCount?: boolean;
  onPressEnter?: any;
  readOnly?: boolean;
  rows?: number;
  suffix?: string;
  prefix?: string;
  format?: any;
  onFocus?: any;
  onBlur?: any;
  onInput?: any;
  onBeforeInput?: any;
  form?: any;
  valid?: any;
  realData?: any;
  option?: any;
  setRealData?: React.Dispatch<React.SetStateAction<any>>;
  [key: string]: any;
};

/**
 * inputNumberProps
 * @property {number} min min
 * @property {number} max max
 * @property {number} step step
 * @property {boolean} showCount showCount
 * @property {any} formatter formatter
 * @property {any} parser parser
 */
type inputNumberProps = InputProps & {
  min?: number;
  max?: number;
  step?: number;
  showCount?: boolean;
  formatter?: any;
  parser?: any;
  format?: any;
  onKeyDown?: any;
  onBeforeInput?: any;
  stepper?: any;
  [key: string]: any;
};

/**
 * <InputPassword> Props 타입 정의
 * @property {number} maxLength maxLength
 * @property {boolean} showCount showCount
 * @property {boolean} visibilityToggle visibilityToggle
 */
type InputPasswordProps = InputProps & {
  maxLength?: number;
  showCount?: boolean;
  visibilityToggle?: boolean;
  [key: string]: any;
};

/**
 * <InputSearch> Props 타입 정의
 * @property {boolean | ReactNode} enterButton enterButton
 * @property {number} maxLength maxLength
 * @property {boolean} showCount showCount
 * @property {any} onSearch onSearch
 * @property {any} onPressEnter onPressEnter
 * @property {string} nameSearch nameSearch
 * @property {number} spanSearch spanSearch
 * @property {boolean} hidden hidden
 */
type InputSearchProps = InputProps & {
  enterButton?: boolean | ReactNode;
  maxLength?: number;
  showCount?: boolean;
  onSearch?: any;
  onPressEnter?: any;
  nameSearch?: string;
  spanSearch?: number;
  hidden?: boolean;
  onKeyDown?: any;
  readOnly?: boolean;
  [key: string]: any;
};

/**
 * <Selectbox> Props 타입 정의
 * @property {string} mode mode
 * @property {object[]} options options
 * @property {string} optionLabel optionLabel
 * @property {string} optionValue optionValue
 * @property {boolean} showSearch showSearch
 * @property {object} fieldNames fieldNames
 * @property {any} defaultValue defaultValue
 * @property {any} notFoundContent notFoundContent
 * @property {boolean} allowClear allowClear
 * @property {any} filterOption filterOption
 * @property {any} onChange onChange
 * @property {any} onSelect onSelect
 * @property {any} onSearch onSearch
 * @property {any} onBlur onBlur
 */
interface SelectboxProps extends InputProps {
  mode?: 'multiple' | 'tags';
  options?: object[];
  optionLabel?: string;
  optionValue?: string;
  showSearch?: boolean;
  fieldNames?: object;
  defaultValue?: any;
  notFoundContent?: any;
  allowClear?: boolean;
  filterOption?: any;
  onChange?: any;
  onSelect?: any;
  onSearch?: any;
  onBlur?: any;
  open?: boolean;
  span?: number;
  popupMatchSelectWidth?: boolean | any;
  [key: string]: any;
}

/**
 * <Checkbox> Props 타입 정의
 * @property {boolean} trueValue trueValue
 * @property {boolean} falseValue falseValue
 * @property {boolean} checked checked
 * @property {boolean} indeterminate indeterminate
 */
type CheckboxProps = InputProps & {
  trueValue?: boolean | string;
  falseValue?: boolean | string;
  checked?: boolean;
  indeterminate?: boolean;
  [key: string]: any;
};

/**
 * <CheckboxGroup> Props 타입 정의
 * @property {object[]} options options
 * @property {string} optionDisabled optionDisabled
 * @property {string} optionLabel optionLabel
 * @property {string} optionValue optionValue
 * @property {number} optionSpan optionSpan
 */
type CheckboxGrpProps = InputProps & {
  options?: object[];
  optionDisabled?: string;
  optionLabel?: string;
  optionValue?: string;
  optionSpan?: number;
  [key: string]: any;
};

/**
 * <Radiobox> Props 타입 정의
 * @property {object[]} options options
 * @property {string} optionDisabled optionDisabled
 * @property {string} optionLabel optionLabel
 * @property {string} optionValue optionValue
 * @property {string} optionType optionType
 * @property {string} buttonStyle buttonStyle
 */
type RadioboxProps = InputProps & {
  options?: object[];
  optionDisabled?: string;
  optionLabel?: string;
  optionValue?: string;
  optionType?: 'default' | 'button';
  buttonStyle?: 'outline' | 'solid';
  [key: string]: any;
};

/**
 * <Date> Props 타입 정의
 * @property {boolean} allowClear allowClear
 * @property {string} format format
 * @property {string} picker picker
 * @property {any} placement placement
 * @property {boolean} showTime showTime
 * @property {boolean} showNow showNow
 * @property {any} disabledTime disabledTime
 * @property {any} disabledDate disabledDate
 */
type DateProps = {
  span?: number;
  id?: string;
  title?: string;
  placeholder?: string;
  size?: 'large' | 'middle' | 'small';
  width?: string | number;
  value?: any;
  children?: any;
  onChange?: any;
  onPressEnter?: any;
  allowClear?: boolean;
  format?: string;
  picker?: 'date' | 'year' | 'quarter' | 'month' | 'week' | 'time';
  placement?: any;
  showTime?: boolean;
  showNow?: boolean;
  disabled?: [boolean, boolean] | any;
  disabledTime?: any;
  disabledDate?: any;
  onCalendarChange?: any;
  onOpenChange?: any;
  changeOnBlur?: any;
  [key: string]: any;
};

/**
 * <DateRange> Props 타입 정의
 * @property {boolean} allowClear allowClear
 * @property {string} direction direction
 * @property {string} format format
 * @property {string} fromName fromName
 * @property {string} toName toName
 * @property {any} fromDisabledDate fromDisabledDate
 * @property {any} toDisabledDate toDisabledDate
 */
type DateRangeProps = InputProps & {
  allowClear?: boolean;
  direction?: 'horizontal' | 'vertical';
  format?: string;
  fromName: string;
  toName: string;
  fromDisabledDate?: any;
  toDisabledDate?: any;
  open?: boolean;
  inputReadOnly?: boolean;
  changeOnBlur?: any;
  picker?: 'week' | 'month' | 'quarter' | 'year';
  [key: string]: any;
};

/**
 * SearchFormProps
 * @property {any} data data
 * @property {any} setData setData
 * @property {any} children children
 */
interface SearchFormProps {
  data: any;
  setData: any;
  children?: any;
}

export type {
  CheckboxGrpProps,
  CheckboxProps,
  DateProps,
  DateRangeProps,
  FormProps,
  inputNumberProps,
  InputPasswordProps,
  InputProps,
  InputSearchProps,
  InputTextProps,
  RadioboxProps,
  SearchFormProps,
  SelectboxProps,
};
