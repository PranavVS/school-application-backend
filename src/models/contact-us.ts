import mongoose from "mongoose";

export interface ContactUsAttr {
  name?: string;
  email: string;
  query?: string;
}

export interface ContactUsDoc extends mongoose.Document {
  name?: string;
  email: string;
  query?: string;
}
export const contactUsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  query: {
    type: String,
    required: false,
  },
});

export const ContactUs = mongoose.model<ContactUsDoc>(
  "contactInfo",
  contactUsSchema,
  "contactInfo"
);
