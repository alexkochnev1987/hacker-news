interface Highlight {
  value: string;
  matchLevel: string;
  matchedWords: [];
}

interface HighlightNews {
  author: Highlight;
  url?: Highlight;
  title: Highlight;
  story_text?: Highlight;
}

interface HighlightComment {
  author: Highlight;
  comment_text: Highlight;
  story_title: Highlight;
  story_url: Highlight;
}

export interface News {
  created_at: string;
  title: string | null;
  url: string | null;
  author: string;
  points: number | null;
  story_text: string | null;
  comment_text:
    | {
        value: string;
      }
    | null
    | string;
  num_comments: number | null;
  story_id: number | null;
  story_title: string | null;
  story_url: string | null;
  parent_id: number | null;
  created_at_i: number;
  _tags: string[];
  objectID: string;
  _highlightResult: HighlightComment | HighlightNews;
}

export interface GetNews {
  hits: News[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  exhaustive: {
    nbHits: boolean;
    typo: boolean;
  };
  query: string;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: {
    afterFetch?: {
      total: number;
    };
    total: number;
  };
}
