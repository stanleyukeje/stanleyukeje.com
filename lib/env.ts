export interface EnvValidationResult {
  isValid: boolean;
  missingKeys: string[];
}

export function validateEnv(): EnvValidationResult {
  const requiredKeys = [
    'NEXT_PUBLIC_SITE_URL',
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    'RESEND_API_KEY',
    'GITHUB_USERNAME',
  ];

  const missingKeys: string[] = [];

  for (const key of requiredKeys) {
    if (!process.env[key]) {
      missingKeys.push(key);
    }
  }

  if (missingKeys.length > 0) {
    console.warn(
      `[Env Validation Warning]: Missing environment variables: ${missingKeys.join(
        ', '
      )}. Falling back to default configuration values.`
    );
  }

  return {
    isValid: missingKeys.length === 0,
    missingKeys,
  };
}
