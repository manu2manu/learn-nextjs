import { ReactNode } from "react";

export type PostDataType = {
  title: string;
  date: string;
  contentHtml: string;
};

export type BaseProps = {
  children: ReactNode;
};
