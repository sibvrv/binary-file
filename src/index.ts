const bf_byteBuff = new ArrayBuffer(4);

const bf_wba = new Int8Array(bf_byteBuff);

const bf_wsa = new Int16Array(bf_byteBuff);
const bf_wusa = new Uint16Array(bf_byteBuff);

const bf_wia = new Int32Array(bf_byteBuff);
const bf_wuia = new Uint32Array(bf_byteBuff);

const bf_wfa = new Float32Array(bf_byteBuff);

export class BinaryFile {
  static readonly SEEK_START = 0;
  static readonly SEEK_CUR = 1;

  public length = 0;
  public offset = 0;

  constructor(public buffer: any) {
    this.length = buffer.length;
  }

  // Seek to the given byt offset within the stream
  seek(offest: number, mode: number) {
    if (mode === BinaryFile.SEEK_CUR) {
      this.offset += offest;
    } else {
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

  readString(len: number) {
    let str = '';
    for (let i = 0; i < len; i++) {
      str += String.fromCharCode(this.buffer[this.offset++]);
    }
    return str;
  }

  readBuffer(len: number) {
    const off = this.offset;
    this.offset += len;
    return this.buffer.slice(off, this.offset);
  }
}
