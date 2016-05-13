export interface IPost {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

export class Post implements IPost {
  constructor(public id: number,
              public title: string,
              public content: string,
              public created_at: string) { }
}
