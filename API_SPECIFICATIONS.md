
# SD Negeri 12 Kotohilalang - Backend API Specifications

## Technology Stack
- **Framework**: Express.js
- **Database**: MongoDB/MySQL (recommended: MongoDB)
- **Authentication**: JWT (JSON Web Token)
- **File Upload**: Multer
- **Image Processing**: Sharp (optional)
- **Validation**: Joi or express-validator

## Base URL
```
http://localhost:3001/api/v1
```

## Authentication

### Admin Login
```http
POST /auth/admin/login
```

**Request Body:**
```json
{
  "username": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "jwt_token_here",
    "admin": {
      "id": "admin_id",
      "username": "admin_username",
      "role": "admin"
    }
  }
}
```

### Verify Token
```http
GET /auth/verify
Authorization: Bearer {token}
```

## Facilities Management

### Get All Facilities
```http
GET /facilities
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "facility_id",
      "name": "Facility Name",
      "description": "Facility Description",
      "image": "image_url",
      "features": ["feature1", "feature2"],
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  ]
}
```

### Get Facility by ID
```http
GET /facilities/{id}
```

### Create New Facility (Admin Only)
```http
POST /facilities
Authorization: Bearer {admin_token}
Content-Type: multipart/form-data
```

**Request Body:**
```json
{
  "name": "string",
  "description": "string",
  "image": "file",
  "features": ["string"]
}
```

### Update Facility (Admin Only)
```http
PUT /facilities/{id}
Authorization: Bearer {admin_token}
```

### Delete Facility (Admin Only)
```http
DELETE /facilities/{id}
Authorization: Bearer {admin_token}
```

## Gallery Management

### Get All Gallery Items
```http
GET /gallery
```

**Query Parameters:**
- `page`: number (default: 1)
- `limit`: number (default: 12)
- `category`: string (optional)

**Response:**
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "gallery_id",
        "title": "Image Title",
        "description": "Image Description",
        "image": "image_url",
        "category": "kegiatan|fasilitas|prestasi",
        "createdAt": "timestamp"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalItems": 50,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

### Add Gallery Item (Admin Only)
```http
POST /gallery
Authorization: Bearer {admin_token}
Content-Type: multipart/form-data
```

### Update Gallery Item (Admin Only)
```http
PUT /gallery/{id}
Authorization: Bearer {admin_token}
```

### Delete Gallery Item (Admin Only)
```http
DELETE /gallery/{id}
Authorization: Bearer {admin_token}
```

## News/Blog Management

### Get All News
```http
GET /news
```

**Query Parameters:**
- `page`: number
- `limit`: number
- `featured`: boolean

**Response:**
```json
{
  "success": true,
  "data": {
    "articles": [
      {
        "id": "news_id",
        "title": "News Title",
        "excerpt": "Short description",
        "content": "Full content",
        "image": "image_url",
        "author": "Author Name",
        "featured": false,
        "publishedAt": "timestamp",
        "createdAt": "timestamp"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 3,
      "totalItems": 25
    }
  }
}
```

### Get News by ID
```http
GET /news/{id}
```

### Create News (Admin Only)
```http
POST /news
Authorization: Bearer {admin_token}
```

### Update News (Admin Only)
```http
PUT /news/{id}
Authorization: Bearer {admin_token}
```

### Delete News (Admin Only)
```http
DELETE /news/{id}
Authorization: Bearer {admin_token}
```

## Contact Management

### Submit Contact Form
```http
POST /contact
```

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "subject": "string",
  "message": "string"
}
```

### Get All Contact Messages (Admin Only)
```http
GET /contact
Authorization: Bearer {admin_token}
```

### Mark Contact as Read (Admin Only)
```http
PATCH /contact/{id}/read
Authorization: Bearer {admin_token}
```

## Dashboard Statistics (Admin Only)

### Get Dashboard Stats
```http
GET /dashboard/stats
Authorization: Bearer {admin_token}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "totalFacilities": 8,
    "totalGalleryItems": 45,
    "totalNews": 12,
    "unreadMessages": 5,
    "recentActivities": [
      {
        "type": "contact",
        "message": "New contact message from John Doe",
        "timestamp": "timestamp"
      }
    ]
  }
}
```

## File Upload

### Upload Image
```http
POST /upload/image
Authorization: Bearer {admin_token}
Content-Type: multipart/form-data
```

**Request:**
```
image: file (max 5MB, jpg/jpeg/png/webp)
```

**Response:**
```json
{
  "success": true,
  "data": {
    "url": "https://domain.com/uploads/image_name.jpg",
    "filename": "image_name.jpg",
    "size": 1024000
  }
}
```

## Error Responses

All endpoints return consistent error responses:

```json
{
  "success": false,
  "message": "Error message",
  "errors": ["Detailed error messages"]
}
```

## Common HTTP Status Codes
- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `422`: Validation Error
- `500`: Internal Server Error

## Environment Variables Required
```env
PORT=3001
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key
DB_CONNECTION_STRING=mongodb://localhost:27017/sdn12kotohilalang
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=5242880
CORS_ORIGIN=http://localhost:5173
```

## Middleware Requirements
1. **CORS**: Enable cross-origin requests
2. **Body Parser**: Parse JSON and form data
3. **File Upload**: Handle multipart/form-data
4. **Authentication**: Verify JWT tokens
5. **Validation**: Validate request data
6. **Error Handler**: Global error handling
7. **Rate Limiting**: Prevent abuse
8. **Helmet**: Security headers

## Database Schema Suggestions

### Facilities Collection/Table
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  image: String,
  features: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### Gallery Collection/Table
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  image: String,
  category: String, // kegiatan, fasilitas, prestasi
  createdAt: Date
}
```

### News Collection/Table
```javascript
{
  _id: ObjectId,
  title: String,
  excerpt: String,
  content: String,
  image: String,
  author: String,
  featured: Boolean,
  publishedAt: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### Contact Collection/Table
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  isRead: Boolean,
  createdAt: Date
}
```

### Admin Collection/Table
```javascript
{
  _id: ObjectId,
  username: String,
  password: String, // hashed
  role: String,
  createdAt: Date,
  lastLogin: Date
}
```
