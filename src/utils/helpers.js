/** Converts a string to a float with comma-to-dot replacement, defaulting to 0. */
export function parseNumber(value) {
  if (!value) return 0;
  const num = parseFloat(value.replace(",", "."));
  return isNaN(num) ? 0 : num;
}

/** Converts a string to an integer, defaulting to 0 on failure. */
export function parseIntOrZero(value) {
  if (!value) return 0;
  const num = parseInt(value);
  return isNaN(num) ? 0 : num;
}

/** Splits a comma-separated string into an array of trimmed non-empty values */
export function splitAndTrim(value) {
  if (!value) return [];
  return value
    .split(",")
    .map(x => x.trim())
    .filter(x => x);
}

/** Joins an array into a comma-separated string */
export function joinArray(array) {
  if (!array || !Array.isArray(array)) return "";
  return array.join(", ");
}