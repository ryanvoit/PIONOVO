export const cx = (...classNames: Array<string | undefined>): string =>
  classNames.filter(Boolean).join(" ")
