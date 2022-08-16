import mongoose from "mongoose";

export interface NoticeBoardAttr {
  title: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface NoticeBoardDoc extends mongoose.Document {
  title: string;
  description: string;
  hasArchieved: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export const noticeBoardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    hasArchieved: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const NoticeBoard = mongoose.model<NoticeBoardDoc>(
  "noticeBoard",
  noticeBoardSchema,
  "noticeBoard"
);
