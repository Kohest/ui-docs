export function generateAnchorLink(title: string): string {
  return `#${title.toLowerCase().replace(/\s+/g, "-")}`;
}
