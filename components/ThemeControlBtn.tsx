"use client";
import { colors } from "@/lib/theme";
import { useTheme } from "@/lib/ThemeProvider";

export function ThemeControlButton() {
  const [theme, setTheme] = useTheme();
  {
    /* Use the context setter function to update the colors on click */
  }
  const handleThemeChange = () => {
    if (!setTheme) return;
    setTheme((prevTheme) => (prevTheme + 1) % colors.length);
  };
  return (
    <div
      style={{
        backgroundColor: colors[theme ?? 0]?.pri,
        borderColor: colors[theme ?? 0]?.acc,
        borderWidth: 2,
      }}
      className="btn-pri relative justify-start text-white text-shadow-lg/30 text-xl select-none touch-manipulation"
      onMouseDown={handleThemeChange}
    >
      {"Change Theme"}
    </div>
  );
}
