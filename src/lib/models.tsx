export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  is_published: boolean;
  des: string;
  preview: string;
  genre: string;
}
export interface Menu{
  id: number;
  name: string;
  des: string;
  price: number;

}
export interface Order{
  order_id: number;
  id: number;
  quan: number;
  detail: string;
}
