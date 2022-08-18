// export interface User {
// }
4
export class User {
  public avatar: string;
  email: string;
  first_name: string;
  id: Number;
  last_name: string;
}

export class UserInformation {
  page: Number;
  per_page: Number;
  support: any;
  total: Number;
  total_pages: Number;
  data: User[];
}