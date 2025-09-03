# Explanation of Permissions

- 640 – means only users with "role": "admin" can access the resource.
- 660 – Owner or admin
- 600 – Only the owner (authenticated user who created the resource)
- true – Public access (no authentication required)

So in this example rules.json file:

- Users can only access their own data (600)
- Posts and Comments can be read by anyone, but only created/updated/deleted by the owner or an admin (660)
- Admin resource is restricted to admins only (640)

To use the rules.json file in your server.js setup with json-server-auth, you simply need to place the rules.json file in the root directory of your project. json-server-auth automatically looks for it and applies the rules when handling requests.
