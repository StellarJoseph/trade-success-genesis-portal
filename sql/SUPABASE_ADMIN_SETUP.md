Supabase admin setup — create admin user and profile

This file shows step-by-step instructions to create an admin user that the app will accept when Supabase is configured.

Option A — Quick manual (recommended if you prefer the UI)
1. Go to your Supabase project dashboard.
2. Authentication -> Users -> "Invite user" / "Create user" (depending on your dashboard version).
   - Email: admin@example.test
   - Password: Admin#1234
3. In the SQL editor (or via the UI), run the SQL in `create_admin_profile.sql` and replace `<USER_UUID>` with the UUID shown for the user you created.

Option B — Use the REST/Admin API (requires service role key)
WARNING: The service_role key is powerful. Keep it secret and do not commit it.

1. Get your Supabase project URL and SERVICE_ROLE key from Project Settings -> API.
2. Create a user via the Admin REST API (example using curl):

```bash
# Replace placeholders
SUPABASE_URL="https://your-project-id.supabase.co"
SERVICE_ROLE_KEY="your-service-role-key"

curl -s -X POST "${SUPABASE_URL}/auth/v1/admin/users" \
  -H "apikey: ${SERVICE_ROLE_KEY}" \
  -H "Authorization: Bearer ${SERVICE_ROLE_KEY}" \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.test","password":"Admin#1234","email_confirm":true}'
```

The API will return the created user object — note the `id` field (this is the user's UUID).

3. Add a profile row to grant admin role. You can run the SQL in `create_admin_profile.sql`, replacing `<USER_UUID>` with the returned `id`.

Option C — Supabase CLI (if you use CLI tooling)
1. Install and login to the Supabase CLI: https://supabase.com/docs/guides/cli
2. Use CLI commands to create a user or run SQL. CLI usage varies by version — prefer the dashboard + SQL method if unsure.

Notes
- The app's `ProtectedRoute` checks `profiles.role` and requires `role === 'admin'` for admin routes.
- If you only want to test locally and avoid Supabase, use the `.env.local` values:
  - Email/username: admin@example.test
  - Password: Admin#1234

Security
- Never share or commit the service_role key.
- Remove demo credentials before deploying to production.
