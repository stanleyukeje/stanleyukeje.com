export interface SupabaseResponse<T> {
  data: T | null;
  error: string | null;
}

export function formatSupabaseError(error: unknown): string {
  if (typeof error === 'object' && error !== null && 'message' in error) {
    return String((error as { message: string }).message);
  }
  return 'An unexpected Supabase error occurred.';
}
