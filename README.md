# Backend API Documentation

This project provides a backend implementation with JWT-based authentication and an organized project structure. Below are the features and endpoints supported.

---

## Key Features

1. **Proper Error Handling**  
2. **JWT-Based Authentication**  
3. **Password Hashing with bcrypt**  
4. **Middleware for Protected Routes**  
5. **Development Logging with Morgan**  
6. **Environment Variable Configuration**  
7. **Organized Project Structure**  

---

## Endpoints

### **1. User Registration**

**Endpoint:**  
`POST /api/auth/register`  

**Request Body:**  
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### **2. User Login**
**Endpoint:**  
`POST /api/auth/login`

**Request Body:**  
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### **3. User Profile**
**Endpoint:**  
`GET /api/auth/profile`

**Headers:**  
`Authorization: Bearer <your-jwt-token>`


**Description:**  
Returns user profile information for authenticated users.


### **4. Update User Credentials**
**Endpoint:**  
`PUT /api/auth/update-credentials`

**Request Body:**  
```json
{
  "currentPassword": "currentPassword123",
  "newPassword": "newPassword123",
  "newEmail": "newuser@example.com"
}
```

**Description:**  
Returns user profile information for authenticated users.


# Backend API: Features and Enhancements

## Key Features

- **Requires JWT Authentication**  
- **Verifies Current Password Before Allowing Changes**  
- **Checks for Email Conflicts**  
- **Hashes New Passwords Before Storing**  
- **Issues a New JWT if the Email is Changed**  
- **Includes Proper Validation and Error Handling**  

---

## Security Features

- **Verifies Current Password** to prevent unauthorized changes.  
- **Ensures New Email Addresses are Unique** to avoid conflicts.  
- **Refreshes the JWT Token** when the email is updated.  

---

## Notes

This implementation currently uses **in-memory storage** for user data.  
For production environments:  
- Use a proper database (e.g., MongoDB, PostgreSQL).  
- Add input validation (e.g., email format validation).  
- Implement password reset functionality.  
- Add rate limiting.  
- Use HTTPS.  
- Implement refresh tokens.  

---

## Development Features

- **Source Maps for Debugging**  
- **Nodemon Configuration**  
- **Build Scripts**  
- **Type Checking**  

---

## Future Enhancements

Would you like to:  
- Add **request validation** using a library like [Zod](https://github.com/colinhacks/zod)?  
- Add **password strength validation**?  
- Implement **rate limiting** for sensitive endpoints?  
- Track **password history** to prevent reuse?  
- Add database integration with [TypeORM](https://typeorm.io/) or [Prisma](https://www.prisma.io/)?  
