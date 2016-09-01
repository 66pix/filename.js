export { extension, basename, removeSuffix, removeSuffixWithDelimiter, appendSuffix, appendSuffixWithDelimiter, directoryName };
export declare const filenameJs: {
    extension: (filename: string) => string;
    basename: (filename: string) => string;
    removeSuffix: (filename: string) => any;
    removeSuffixWithDelimiter: (delimiter: string, filename: string) => string;
    appendSuffix: (suffix: FilenameJSSuffix, filename: string) => any;
    appendSuffixWithDelimiter: (_suffix_: FilenameJSSuffix, delimiter: string, filename: string) => string;
    directoryName: (filename: string) => string;
};
declare function extension(filename: string): string;
declare function basename(filename: string): string;
declare function removeSuffix(filename: string): any;
declare function removeSuffixWithDelimiter(delimiter: string, filename: string): string;
export declare type FilenameJSSuffix = number | string | (string | number)[];
declare function appendSuffix(suffix: FilenameJSSuffix, filename: string): any;
declare function appendSuffixWithDelimiter(_suffix_: FilenameJSSuffix, delimiter: string, filename: string): string;
declare function directoryName(filename: string): string;
