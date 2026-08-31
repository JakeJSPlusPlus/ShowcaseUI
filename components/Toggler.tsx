"use client";
import { colors } from "@/lib/theme";
import { useTheme } from "@/lib/ThemeProvider";

type ToggleProps = {
  checked: boolean;
  setChecked: (checked: boolean) => void;
};

export function Toggler({checked, setChecked}: ToggleProps) {
  const [theme, setTheme] = useTheme();
  return (
    <label  className={ "switch"} >
      <input checked={ checked} type="checkbox" onChange={() => setChecked(!checked)}/>
      <span className={"slider"} style={{ backgroundColor: (checked) ? colors[theme ?? 0]?.pri : "#ccc"}}></span>
    </label>
  );
}
