export declare class BinaryFile {
    buffer: any;
    static readonly SEEK_START = 0;
    static readonly SEEK_CUR = 1;
    length: number;
    offset: number;
    constructor(buffer: any);
    seek(offest: number, mode: number): void;
    readByte(): number;
    readUByte(): any;
    readShort(): number;
    readUShort(): number;
    readLong(): number;
    readULong(): number;
    readFloat(): number;
    readFloat_lil(): number;
    readString(len: number): string;
    readBuffer(len: number): any;
}
