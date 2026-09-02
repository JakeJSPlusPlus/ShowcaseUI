"use client";
import { colors } from "@/lib/theme";
import { useTheme } from "@/lib/ThemeProvider";

type ToggleProps = {
  checked: boolean;
  setChecked: (checked: boolean) => void;
};

export function Toggler({ checked, setChecked }: ToggleProps) {
  {
    /* Fun toggle switch with the ability to change light/dark mode
    Colors are pulled from the theme context
    ARGS:
      checked: boolean - whether the toggle is checked or not
      setChecked: (checked: boolean) => void - function to set the checked state
    */
  }
  const [theme] = useTheme();
  return (
    <label className={"switch"}>
      <input
        checked={checked}
        type="checkbox"
        onChange={() => setChecked(!checked)}
      />
      <span
        className={"slider"}
        style={{ backgroundColor: checked ? colors[theme ?? 0]?.pri : "#ccc" }}
      ></span>
    </label>
  );
}
