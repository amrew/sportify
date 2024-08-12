import { PropsWithChildren, SelectHTMLAttributes } from "react";
import { selectStyle } from "./select.css";

type Option = {
  label: string;
  value: string;
};

export type TextProps = SelectHTMLAttributes<HTMLSelectElement> &
  Parameters<typeof selectStyle>[0] & {
    options: Option[];
  };

export function Select(props: PropsWithChildren<TextProps>) {
  const { options, ...others } = props;
  return (
    <select className={selectStyle()} {...others}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
