export const changeCssVariables = (theme: string) => {
  const root = document.querySelector(":root") as HTMLElement;
  root.style.setProperty("--theme-default-font", `var(--theme-${theme}-font)`);
  root.style.setProperty("--theme-default-bg", `var(--theme-${theme}-bg)`);
  root.style.setProperty(
    "--theme-default-border",
    `var(--theme-${theme}-border)`
  );
  const cssVariables = ["font", "bg", "border"];
  cssVariables.forEach((element) => {
    root?.style.setProperty(
      `--theme-default-${element}`,
      `var(--theme-${theme}-${element})`
    );
  });
};
