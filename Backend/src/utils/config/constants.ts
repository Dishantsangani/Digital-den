export const StatusCodes = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
  INVALID_TOKEN: 498,
};

export const kMessages = {
  NDF404: "404 route not found",
  ROLES: "Roles",
  INTERNAL_SERVER_ERROR: "inernal server error",
  BAD_REQUEST: "Bad request.",
  //------------------------  user     -----------------------
  USERS: "Users fetched successfully",
  USER_CREATED: "User created successfully",
  USER_NOT_FOUNND: "User not found",
  LOGIN_SUCCESS: "Login successfully",
  EMAIL_SENT: "Email sent successfully",
  SET_PASSWORD: "Password set successfully",
  ACCESS_DENIED: "Access denied ",
  UPDATE_USER_STATUS: "User status updated successfully",
  USER_DELETED: "User deleted  successfully",
  USER_LOGOUT: "User logout successfully",
  USER_UNAUTHORIZED: "user is unauthorized",
  USER_AUTHORIZED: "user is authorized",

  //------------------------  Role     -----------------------
  ROLE_CREATE: "Role created successfully",
  INVALIDPASSWORD: "Invalid password",

  //------------------------  Token     -----------------------
  MISS_TOKEN: "missing token",
  INVALID_TOKEN: "invalid token",

  //------------------------  Data     -----------------------
  DATA_DELETED: "deleted successfully",
  DATA_FEATCHED: "featched successfully",
  DATA_UPDATED: "updated successfully",
  DATA_CREATED: "created successfully",
  DATA_NOTFOUND: "data not found",
};
