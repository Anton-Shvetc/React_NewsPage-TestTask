export interface CommentsStateInterface {
  comments: NewsInterface[];
  commentsLoading: boolean;
  error: string;
}

export interface NewsInterface {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  text: string;
  parent: number;
}

export interface NewsStateInterface {
  ids: number[];
  news: NewsInterface[];
  params: number[];
  newsById: NewsInterface;
  isLoading: boolean;
  error: string;
}

export interface NewsProps {
  getNews: () => void;
}

export interface NewsItemProps {
  news: NewsInterface;
}

export interface NewsCommentsItemProps {
  comment: NewsInterface;
  level: 1 | 2;
}

export interface ShortTextProps {
  comment: NewsInterface;
}

export interface NewsCommentsProps {
  news: NewsInterface;
  comments: NewsInterface[];
  getComments: () => void;
}
