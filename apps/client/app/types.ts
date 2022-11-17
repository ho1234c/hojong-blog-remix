export type PostMeta = {
  title: string;
  date: string;
  tags?: string[];
  draft?: boolean;
};

export type EnhancedPostMeta = PostMeta & { slug: string };
