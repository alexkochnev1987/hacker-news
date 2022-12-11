import { GetNews } from './news';

export const API_URL = 'http://hn.algolia.com/api/v1/search?tags=front_page';

export const API_COMMENT =
  'http://hn.algolia.com/api/v1/search?tags=comment,story_';

export const API_STORY = 'http://hn.algolia.com/api/v1/search?tags=story_';
export enum Tag {
  story = 'strory',
  comment = 'comment',
  poll = 'poll',
  pollopt = 'pollopt',
  show_hn = 'show_hn',
  ask_hn = 'ask_hh',
  front_page = 'front_page',
}
