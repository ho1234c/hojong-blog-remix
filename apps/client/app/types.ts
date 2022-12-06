export type PostMeta = {
  title: string;
  created_at: string;
  tags?: string[];
  draft?: boolean;
  slug: string;
};

export type PostDetail = {
  title: string;
  created_at: string;
  tags?: string[];
  slug: string;
  content: string;
};
