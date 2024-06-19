import { z } from 'zod'

// These error messages can be sources from internationalization files
const FIELD_REQUIRED_STR = 'Dit veld is verplicht'
const FIELD_MIN_STR = 'Dit veld moet minimaal 5 karakters bevatten'
const FIELD_MAX_STR = 'Dit veld mag niet langer zijn dan 50 karakters'
const FIELD_REGEX_STR =
  'Dit veld mag alleen letters, cijfers en underscores bevatten'
const FIELD_INVALID_STR = 'Ongeldige gebruikersnaam'

export const UsernameSchema = z.object({
  username: z
    .string({
      invalid_type_error: FIELD_INVALID_STR,
      required_error: FIELD_REQUIRED_STR,
    })
    .trim()
    .min(5, FIELD_MIN_STR)
    .max(50, FIELD_MAX_STR)
    .regex(/^[a-zA-Z0-9_]*$/, FIELD_REGEX_STR),
})
