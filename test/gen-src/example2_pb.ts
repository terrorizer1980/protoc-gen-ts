// Generated by the protocol buffer compiler.  DO NOT EDIT!
// Source: example2.proto

import * as __pb__ from '../../lib/protobuf'
import * as ___example3_pb from './example3_pb'


export const enum AEnum2 {
  Z = 0,
}

export class example2 implements __pb__.Message {
  zomg: number;

  constructor() {
    this.zomg = 0;
  }

  MergeFrom(d: __pb__.Internal.Decoder): void {
    while (!d.isEOF()) {
      let [fn, wt] = d.readTag();
      switch(fn) {
        case 1:
        this.zomg = d.readVarInt32();
        break;
        default:
        d.skipWireType(wt)
      }
    }
  }

  WriteTo(e: __pb__.Internal.Encoder): void {
    if (this.zomg != 0) {
      e.writeTag(1, 0);
      e.writeNumberAsVarint(this.zomg);
    }
  }
}

export class refexample3 implements __pb__.Message {
  funky: ___example3_pb.Funky | null;

  constructor() {
    this.funky = null;
  }

  MergeFrom(d: __pb__.Internal.Decoder): void {
    while (!d.isEOF()) {
      let [fn, wt] = d.readTag();
      switch(fn) {
        case 1:
        if (this.funky == null) this.funky = new ___example3_pb.Funky();
        this.funky.MergeFrom(d.readDecoder());
        break;
        default:
        d.skipWireType(wt)
      }
    }
  }

  WriteTo(e: __pb__.Internal.Encoder): void {
    {
      const msg = this.funky;
      if (msg != null) {
        let nested = new __pb__.Internal.Encoder();
        msg.WriteTo(nested);
        e.writeEncoder(nested, 1)
      }
    }
  }
}

