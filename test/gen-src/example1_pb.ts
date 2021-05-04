// Generated by the protocol buffer compiler.  DO NOT EDIT!
// Source: example1.proto

import * as __pb__ from '../../lib/protobuf'
import * as ___example2_pb from './example2_pb'
import * as __long from 'long'
import {fromString as __longFromString } from 'long'


export const enum AEnum1 {
  A = 0,
  B = 2,
}

export class example2 implements __pb__.Message {
  aint32: number;

  constructor() {
    this.aint32 = 0;
  }

  MergeFrom(d: __pb__.Internal.Decoder): void {
    while (!d.isEOF()) {
      let [fn, wt] = d.readTag();
      switch(fn) {
        case 1:
        this.aint32 = d.readVarInt32();
        break;
        default:
        d.skipWireType(wt)
      }
    }
  }

  WriteTo(e: __pb__.Internal.Encoder): void {
    if (this.aint32 != 0) {
      e.writeTag(1, 0);
      e.writeNumberAsVarint(this.aint32);
    }
  }
}

export class example1 implements __pb__.Message {
  adouble: number;
  afloat: number;
  aint32: number;
  aint64: __long;
  auint32: number;
  auint64: __long;
  asint32: number;
  asint64: __long;
  afixed32: number;
  afixed64: __long;
  asfixed32: number;
  asfixed64: __long;
  abool: boolean;
  astring: string;
  abytes: Uint8Array;
  aenum1: AEnum1;
  aenum2: example1.AEnum2;
  aenum22: ___example2_pb.AEnum2;
  manystring: string[];
  manyint64: __long[];
  aexample2: example1.example2 | null;
  aexample22: example2 | null;
  aexample23: ___example2_pb.example2 | null;
  amap: Map<string, string>;
  amap2: Map<string, ___example2_pb.example2>;
  outoforder: __long;
  longmap: Map<string, string>;
  aoneof: example1.aoneof.oneof_type;

  constructor() {
    this.adouble = 0.0;
    this.afloat = 0.0;
    this.aint32 = 0;
    this.aint64 = __long.ZERO;
    this.auint32 = 0;
    this.auint64 = __long.UZERO;
    this.asint32 = 0;
    this.asint64 = __long.ZERO;
    this.afixed32 = 0;
    this.afixed64 = __long.UZERO;
    this.asfixed32 = 0;
    this.asfixed64 = __long.ZERO;
    this.abool = false;
    this.astring = "";
    this.abytes = new Uint8Array(0);
    this.aenum1 = 0;
    this.aenum2 = 0;
    this.aenum22 = 0;
    this.manystring = [];
    this.manyint64 = [];
    this.aexample2 = null;
    this.aexample22 = null;
    this.aexample23 = null;
    this.amap = new Map<string, string>();
    this.amap2 = new Map<string, ___example2_pb.example2>();
    this.outoforder = __long.ZERO;
    this.longmap = new Map<string, string>();
    this.aoneof = __pb__.OneofNotSet.singleton;
  }

  MergeFrom(d: __pb__.Internal.Decoder): void {
    while (!d.isEOF()) {
      let [fn, wt] = d.readTag();
      switch(fn) {
        case 1:
        this.adouble = d.readDouble();
        break;
        case 2:
        this.afloat = d.readFloat();
        break;
        case 3:
        this.aint32 = d.readVarInt32();
        break;
        case 4:
        this.aint64 = d.readVarintSigned();
        break;
        case 5:
        this.auint32 = d.readVarUint32();
        break;
        case 6:
        this.auint64 = d.readVarint();
        break;
        case 7:
        this.asint32 = d.readZigZag32();
        break;
        case 8:
        this.asint64 = d.readZigZag64();
        break;
        case 9:
        this.afixed32 = d.readUint32();
        break;
        case 10:
        this.afixed64 = d.readUint64();
        break;
        case 11:
        this.asfixed32 = d.readInt32();
        break;
        case 12:
        this.asfixed64 = d.readInt64();
        break;
        case 13:
        this.abool = d.readBool();
        break;
        case 14:
        this.astring = d.readString();
        break;
        case 15:
        this.abytes = d.readBytes();
        break;
        case 20:
        this.aenum1 = d.readVarintSignedAsNumber();
        break;
        case 21:
        this.aenum2 = d.readVarintSignedAsNumber();
        break;
        case 22:
        this.aenum22 = d.readVarintSignedAsNumber();
        break;
        case 30:
        this.manystring.push(d.readString())
        break;
        case 31:
        if (wt == 2) {
          let packed = d.readDecoder();
          while (!packed.isEOF()) {
            this.manyint64.push(packed.readVarintSigned())
          }
        } else {
          this.manyint64.push(d.readVarintSigned())
        }
        break;
        case 40:
        if (this.aexample2 == null) this.aexample2 = new example1.example2();
        this.aexample2.MergeFrom(d.readDecoder());
        break;
        case 41:
        if (this.aexample22 == null) this.aexample22 = new example2();
        this.aexample22.MergeFrom(d.readDecoder());
        break;
        case 42:
        if (this.aexample23 == null) this.aexample23 = new ___example2_pb.example2();
        this.aexample23.MergeFrom(d.readDecoder());
        break;
        case 51:
        {
          let obj = new example1.AmapEntry();
          obj.MergeFrom(d.readDecoder());
          this.amap.set(obj.key, obj.value);
        }
        break;
        case 52:
        {
          let obj = new example1.Amap2Entry();
          obj.MergeFrom(d.readDecoder());
          this.amap2.set(obj.key, obj.value == null ? new ___example2_pb.example2() : obj.value);
        }
        break;
        case 49:
        this.outoforder = d.readVarintSigned();
        break;
        case 60:
        this.aoneof = new example1.aoneof.oostring(d.readString());
        break;
        case 61:
        this.aoneof = new example1.aoneof.ooint(d.readVarInt32());
        break;
        case 62:
        {
          let obj = new example1.LongmapEntry();
          obj.MergeFrom(d.readDecoder());
          this.longmap.set(obj.key.toString(), obj.value);
        }
        break;
        default:
        d.skipWireType(wt)
      }
    }
  }

  WriteTo(e: __pb__.Internal.Encoder): void {
    if (this.adouble != 0.0) {
      e.writeTag(1, 1);
      e.writeDouble(this.adouble);
    }
    if (this.afloat != 0.0) {
      e.writeTag(2, 5);
      e.writeFloat(this.afloat);
    }
    if (this.aint32 != 0) {
      e.writeTag(3, 0);
      e.writeNumberAsVarint(this.aint32);
    }
    if (this.aint64 != __long.ZERO) {
      e.writeTag(4, 0);
      e.writeVarint(this.aint64);
    }
    if (this.auint32 != 0) {
      e.writeTag(5, 0);
      e.writeNumberAsVarint(this.auint32);
    }
    if (this.auint64 != __long.UZERO) {
      e.writeTag(6, 0);
      e.writeVarint(this.auint64);
    }
    if (this.asint32 != 0) {
      e.writeTag(7, 0);
      e.writeZigZag32(this.asint32);
    }
    if (this.asint64 != __long.ZERO) {
      e.writeTag(8, 0);
      e.writeZigZag64(this.asint64);
    }
    if (this.afixed32 != 0) {
      e.writeTag(9, 5);
      e.writeUint32(this.afixed32);
    }
    if (this.afixed64 != __long.UZERO) {
      e.writeTag(10, 1);
      e.writeUint64(this.afixed64);
    }
    if (this.asfixed32 != 0) {
      e.writeTag(11, 5);
      e.writeInt32(this.asfixed32);
    }
    if (this.asfixed64 != __long.ZERO) {
      e.writeTag(12, 1);
      e.writeInt64(this.asfixed64);
    }
    if (this.abool != false) {
      e.writeTag(13, 0);
      e.writeBool(this.abool);
    }
    if (this.astring != "") {
      e.writeTag(14, 2);
      e.writeString(this.astring);
    }
    if (this.abytes.length != 0) {
      e.writeTag(15, 2);
      e.writeBytes(this.abytes);
    }
    if (this.aenum1 != 0) {
      e.writeTag(20, 0);
      e.writeNumberAsVarint(this.aenum1);
    }
    if (this.aenum2 != 0) {
      e.writeTag(21, 0);
      e.writeNumberAsVarint(this.aenum2);
    }
    if (this.aenum22 != 0) {
      e.writeTag(22, 0);
      e.writeNumberAsVarint(this.aenum22);
    }
    for (let elem of this.manystring) {
      e.writeTag(30, 2);
      e.writeString(elem);
    }
    {
      const packed = new __pb__.Internal.Encoder();
      for (let elem of this.manyint64) {
        packed.writeVarint(elem);
      }
      e.writeEncoder(packed, 31);
    }
    {
      const msg = this.aexample2;
      if (msg != null) {
        let nested = new __pb__.Internal.Encoder();
        msg.WriteTo(nested);
        e.writeEncoder(nested, 40)
      }
    }
    {
      const msg = this.aexample22;
      if (msg != null) {
        let nested = new __pb__.Internal.Encoder();
        msg.WriteTo(nested);
        e.writeEncoder(nested, 41)
      }
    }
    {
      const msg = this.aexample23;
      if (msg != null) {
        let nested = new __pb__.Internal.Encoder();
        msg.WriteTo(nested);
        e.writeEncoder(nested, 42)
      }
    }
    for (const [k, v] of this.amap) {
      let obj = new example1.AmapEntry();
      obj.key = k;
      obj.value = v;
      let nested = new __pb__.Internal.Encoder();
      obj.WriteTo(nested);
      e.writeEncoder(nested, 51);
    }
    for (const [k, v] of this.amap2) {
      let obj = new example1.Amap2Entry();
      obj.key = k;
      obj.value = v;
      let nested = new __pb__.Internal.Encoder();
      obj.WriteTo(nested);
      e.writeEncoder(nested, 52);
    }
    if (this.outoforder != __long.ZERO) {
      e.writeTag(49, 0);
      e.writeVarint(this.outoforder);
    }
    for (const [k, v] of this.longmap) {
      let obj = new example1.LongmapEntry();
      obj.key = __longFromString(k, false);
      obj.value = v;
      let nested = new __pb__.Internal.Encoder();
      obj.WriteTo(nested);
      e.writeEncoder(nested, 62);
    }
    example1.aoneof.WriteTo(this.aoneof, e);
  }
}

export namespace example1.aoneof {
  export class oostring {
    static readonly kind = 60;
    readonly kind = 60;
    value: string;
    constructor(v: string) {
      this.value = v;
    }
  }

  export class ooint {
    static readonly kind = 61;
    readonly kind = 61;
    value: number;
    constructor(v: number) {
      this.value = v;
    }
  }

  export type oneof_type = __pb__.OneofNotSet | oostring | ooint;

  export function WriteTo(oo: oneof_type, e: __pb__.Internal.Encoder):void {
    switch (oo.kind) {
      case 60:
      e.writeTag(60, 2);
      e.writeString((oo as oostring).value);
      return;
      case 61:
      e.writeTag(61, 0);
      e.writeNumberAsVarint((oo as ooint).value);
      return;
    }
  }
}

export namespace example1 {
  export const enum AEnum2 {
    C = 0,
    D = 10,
  }
}

export namespace example1 {
  export class example2 implements __pb__.Message {
    astring: string;

    constructor() {
      this.astring = "";
    }

    MergeFrom(d: __pb__.Internal.Decoder): void {
      while (!d.isEOF()) {
        let [fn, wt] = d.readTag();
        switch(fn) {
          case 1:
          this.astring = d.readString();
          break;
          default:
          d.skipWireType(wt)
        }
      }
    }

    WriteTo(e: __pb__.Internal.Encoder): void {
      if (this.astring != "") {
        e.writeTag(1, 2);
        e.writeString(this.astring);
      }
    }
  }
}

export namespace example1 {
  export class AmapEntry implements __pb__.Message {
    key: string;
    value: string;

    constructor() {
      this.key = "";
      this.value = "";
    }

    MergeFrom(d: __pb__.Internal.Decoder): void {
      while (!d.isEOF()) {
        let [fn, wt] = d.readTag();
        switch(fn) {
          case 1:
          this.key = d.readString();
          break;
          case 2:
          this.value = d.readString();
          break;
          default:
          d.skipWireType(wt)
        }
      }
    }

    WriteTo(e: __pb__.Internal.Encoder): void {
      if (this.key != "") {
        e.writeTag(1, 2);
        e.writeString(this.key);
      }
      if (this.value != "") {
        e.writeTag(2, 2);
        e.writeString(this.value);
      }
    }
  }
}

export namespace example1 {
  export class Amap2Entry implements __pb__.Message {
    key: string;
    value: ___example2_pb.example2 | null;

    constructor() {
      this.key = "";
      this.value = null;
    }

    MergeFrom(d: __pb__.Internal.Decoder): void {
      while (!d.isEOF()) {
        let [fn, wt] = d.readTag();
        switch(fn) {
          case 1:
          this.key = d.readString();
          break;
          case 2:
          if (this.value == null) this.value = new ___example2_pb.example2();
          this.value.MergeFrom(d.readDecoder());
          break;
          default:
          d.skipWireType(wt)
        }
      }
    }

    WriteTo(e: __pb__.Internal.Encoder): void {
      if (this.key != "") {
        e.writeTag(1, 2);
        e.writeString(this.key);
      }
      {
        const msg = this.value;
        if (msg != null) {
          let nested = new __pb__.Internal.Encoder();
          msg.WriteTo(nested);
          e.writeEncoder(nested, 2)
        }
      }
    }
  }
}

export namespace example1 {
  export class LongmapEntry implements __pb__.Message {
    key: __long;
    value: string;

    constructor() {
      this.key = __long.ZERO;
      this.value = "";
    }

    MergeFrom(d: __pb__.Internal.Decoder): void {
      while (!d.isEOF()) {
        let [fn, wt] = d.readTag();
        switch(fn) {
          case 1:
          this.key = d.readVarintSigned();
          break;
          case 2:
          this.value = d.readString();
          break;
          default:
          d.skipWireType(wt)
        }
      }
    }

    WriteTo(e: __pb__.Internal.Encoder): void {
      if (this.key != __long.ZERO) {
        e.writeTag(1, 0);
        e.writeVarint(this.key);
      }
      if (this.value != "") {
        e.writeTag(2, 2);
        e.writeString(this.value);
      }
    }
  }
}

export class ExampleServiceClient {
  private cc: __pb__.Grpc.ClientConn;
  constructor(cc: __pb__.Grpc.ClientConn) {
    this.cc = cc;
  }

  async OneToTwo(min: example1, ...co: __pb__.Grpc.CallOption[]): Promise<example2> {
    let mout = new example2();
    await this.cc.Invoke('/foo.bar.ExampleService/OneToTwo', min, mout, ...co);
    return mout;
  }
}
