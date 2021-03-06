"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryFile = void 0;
const bf_byteBuff = new ArrayBuffer(4);
const bf_wba = new Int8Array(bf_byteBuff);
const bf_wsa = new Int16Array(bf_byteBuff);
const bf_wusa = new Uint16Array(bf_byteBuff);
const bf_wia = new Int32Array(bf_byteBuff);
const bf_wuia = new Uint32Array(bf_byteBuff);
const bf_wfa = new Float32Array(bf_byteBuff);
class BinaryFile {
    constructor(buffer) {
        this.buffer = buffer;
        this.length = 0;
        this.offset = 0;
        this.length = buffer.length;
    }
    // Seek to the given byt offset within the stream
    seek(offest, mode) {
        if (mode === BinaryFile.SEEK_CUR) {
            this.offset += offest;
        }
        else {
            this.offset = offest;
        }
    }
    // Read a signed byte from the stream
    readByte() {
        const b0 = this.buffer[this.offset];
        this.offset += 1;
        return b0 - (b0 & 0x80);
    }
    // Read an unsigned byte from the stream
    readUByte() {
        return this.buffer[this.offset++];
    }
    // Read a signed short (2 bytes) from the stream
    readShort() {
        const off = this.offset;
        const buf = this.buffer;
        bf_wba[0] = buf[off];
        bf_wba[1] = buf[off + 1];
        this.offset += 2;
        return bf_wsa[0];
    }
    // Read an unsigned short (2 bytes) from the stream
    readUShort() {
        const off = this.offset;
        const buf = this.buffer;
        bf_wba[0] = buf[off];
        bf_wba[1] = buf[off + 1];
        this.offset += 2;
        return bf_wusa[0];
    }
    // Read a signed long (4 bytes) from the stream
    readLong() {
        const off = this.offset;
        const buf = this.buffer;
        bf_wba[0] = buf[off];
        bf_wba[1] = buf[off + 1];
        bf_wba[2] = buf[off + 2];
        bf_wba[3] = buf[off + 3];
        this.offset += 4;
        return bf_wia[0];
    }
    // Read an unsigned long (4 bytes) from the stream
    readULong() {
        const off = this.offset;
        const buf = this.buffer;
        bf_wba[0] = buf[off];
        bf_wba[1] = buf[off + 1];
        bf_wba[2] = buf[off + 2];
        bf_wba[3] = buf[off + 3];
        this.offset += 4;
        return bf_wuia[0];
    }
    // Read a float (4 bytes) from the stream
    readFloat() {
        const off = this.offset;
        const buf = this.buffer;
        bf_wba[0] = buf[off];
        bf_wba[1] = buf[off + 1];
        bf_wba[2] = buf[off + 2];
        bf_wba[3] = buf[off + 3];
        this.offset += 4;
        return bf_wfa[0];
    }
    readFloat_lil() {
        const off = this.offset;
        const buf = this.buffer;
        bf_wba[3] = buf[off];
        bf_wba[2] = buf[off + 1];
        bf_wba[1] = buf[off + 2];
        bf_wba[0] = buf[off + 3];
        this.offset += 4;
        return bf_wfa[0];
    }
    readString(len) {
        let str = '';
        for (let i = 0; i < len; i++) {
            str += String.fromCharCode(this.buffer[this.offset++]);
        }
        return str;
    }
    readBuffer(len) {
        const off = this.offset;
        this.offset += len;
        return this.buffer.slice(off, this.offset);
    }
}
exports.BinaryFile = BinaryFile;
BinaryFile.SEEK_START = 0;
BinaryFile.SEEK_CUR = 1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBTSxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFdkMsTUFBTSxNQUFNLEdBQUcsSUFBSSxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFMUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDM0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFN0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDM0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFN0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFN0MsTUFBYSxVQUFVO0lBT3JCLFlBQW1CLE1BQVc7UUFBWCxXQUFNLEdBQU4sTUFBTSxDQUFLO1FBSHZCLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBR2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBRUQsaURBQWlEO0lBQ2pELElBQUksQ0FBQyxNQUFjLEVBQUUsSUFBWTtRQUMvQixJQUFJLElBQUksS0FBSyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFRCxxQ0FBcUM7SUFDckMsUUFBUTtRQUNOLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FB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