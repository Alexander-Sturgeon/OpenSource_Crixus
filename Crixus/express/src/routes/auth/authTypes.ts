export type RegisterBody =  {
    username: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName?: string;
    email?: string;
    birthDate?: string;
    teamLabel: string;
}

export type LoginBody = {
    username: string;
    password: string;
  }

export type AuthTokenPayload = {
    userId: number;
  }