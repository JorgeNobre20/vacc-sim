export interface RequestError {
  response: {
    status: number;
  };
}

export interface User {
  name: string;
  email: string;
  id: string;
}
