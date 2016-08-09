export { extension, basename, removeSuffix, removeSuffixWithDelimiter, appendSuffix, appendSuffixWithDelimiter, directoryName };
declare function extension(filename: string): string;
declare function basename(filename: string): string;
declare function removeSuffix(filename: string): any;
declare function removeSuffixWithDelimiter(delimiter: string, filename: string): string;
declare function appendSuffix(suffix: string | string[], filename: string): any;
declare function appendSuffixWithDelimiter(_suffix_: string | string[], delimiter: string, filename: string): string;
declare function directoryName(filename: string): string;
