declare module "filename.js" {
  export function extension(filename: string): string;
  export function basename(filename: string): string;
  export function removeSuffix(filename: string): string;
  export function removeSuffixWithDelimiter(delimiter: string|number, filename: string): string;
  export function appendSuffix(suffix: string, filename: string): string;
  export function appendSuffixWithDelimiter(suffix: string, delimiter: string|number, filename: string): string;
  export function directoryName(filename: string): string;
}
