/**
 * Authentication interfaces for provider-agnostic auth system
 */

import type { User } from '../entities';

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface AuthSession {
  user: User; // Use existing User type from entities
  accessToken: string;
  refreshToken?: string;
  expiresAt?: Date;
}

export interface AuthProvider {
  signIn(credentials: SignInCredentials): Promise<AuthSession>;
  signOut(): Promise<void>;
  getCurrentSession(): Promise<AuthSession | null>;
  refreshSession(): Promise<AuthSession | null>;
  onAuthChange(callback: (session: AuthSession | null) => void): () => void;
}
