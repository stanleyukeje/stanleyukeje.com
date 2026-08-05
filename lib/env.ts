export interface EnvValidationResult {
  isValid: boolean;
  missingKeys: string[];
  warnings: string[];
}

export function validateEnv(): EnvValidationResult {
  const requiredKeys = [
    'NEXT_PUBLIC_SITE_URL',
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    'RESEND_API_KEY',
    'RESEND_FROM_EMAIL',
    'RESEND_TO_EMAIL',
    'CONTACT_EMAIL',
    'GITHUB_USERNAME',
  ];

  const optionalKeys = ['GITHUB_TOKEN'];
  const missingKeys: string[] = [];
  const warnings: string[] = [];

  for (const key of requiredKeys) {
    const val = process.env[key];
    if (!val || val.includes('placeholder') || val.includes('your-')) {
      missingKeys.push(key);
    }
  }

  for (const key of optionalKeys) {
    if (!process.env[key]) {
      warnings.push(`Optional environment variable ${key} is not set.`);
    }
  }

  if (missingKeys.length > 0) {
    console.warn(
      `[Env Validation Warning]: Unconfigured environment variables: ${missingKeys.join(
        ', '
      )}. Using fallback static defaults.`
    );
  }

  return {
    isValid: missingKeys.length === 0,
    missingKeys,
    warnings,
  };
}

export function assertEnv(): void {
  const result = validateEnv();
  if (!result.isValid && process.env.NODE_ENV === 'production') {
    throw new Error(
      `[Critical Production Error]: Missing or unconfigured environment variables: ${result.missingKeys.join(
        ', '
      )}`
    );
  }
}
