"use client";
import Select, { type SingleValue, type ActionMeta } from "react-select";

interface OptionType {
  value: string;
  label: string;
}

interface Props {
  variant?: boolean;
  value: string;
  onChange: (value: string) => void;
}

const options: OptionType[] = [
  { value: "", label: "Select Subject" },
  { value: "art-design", label: "Art & Design" },
  { value: "graphic-design", label: "Graphic Design" },
  { value: "web-design", label: "Web Design" },
  { value: "ux-ui-design", label: "UX/UI Design" },
];

const SubjectSelect = ({ variant, value, onChange }: Props) => {
  const handleChange = (
    option: SingleValue<OptionType>,
    _actionMeta: ActionMeta<OptionType>
  ) => {
    onChange(option?.value || "");
  };

  const customStyles = {
    control: (base: any) => ({
      ...base,
      border: variant ? "1px solid rgba(30, 30, 30, 0.1)" : "none",
      borderBottom: variant
        ? "1px solid rgba(30, 30, 30, 0.1)"
        : "1px solid #04001724",
      borderRadius: variant ? 6 : 0,
      padding: variant ? "0 16px" : "0 30px",
      boxShadow: "none",
      height: variant ? "40px" : "90px",
    }),
    indicatorSeparator: () => ({ display: "none" }),
  };

  const selectedOption =
    options.find((option) => option.value === value) || null;

  return (
    <Select
      options={options}
      value={selectedOption}
      onChange={handleChange}
      styles={customStyles}
      classNamePrefix="react-select"
      isSearchable={false}
    />
  );
};

export default SubjectSelect;
