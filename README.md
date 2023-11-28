# barber app Applcation Idea:


#  API Documentation
#### This documentation provides details on the endpoints for the barber app API.


## Screenshots

### Sign up

- **Endpoint:** `POST /api/user/signup`
- **Authorization:** None
- **Request:**
    ```json
    {
        "username": "mohamamd",
        "email": "moh@mail.com",
        "password": "aA12345678#"
    }
    ```
- **cURL Example:**
    ```bash
    curl --location 'http://localhost:8080/api/user/signup' \
    --data-raw '{
    "username":"mohamamd",
    "email":"moh@mail.com",
    "password":"aA12345678#"
    }'
    ```
- **Response:**
    - Success:
      ```json
      {
          "username": "mohamamd",
          "email": "moh@mail.com",
          "token": "<your_generated_token>"
      }
      ```
    - Failure:
      ```json
      {
          "error": "Error message here"
      }
      ```

### Login

- **Endpoint:** `POST /api/user/login`
- **Authorization:** None
- **Request:**
    ```json
    {
        "email": "moh@mail.com",
        "password": "aA12345678#"
    }
    ```
- **cURL Example:**
    ```bash
    curl --location 'http://localhost:8080/api/user/login' \
    --data-raw
    '{
    "email":"moh@mail.com",
    "password":"aA12345678#"
    }'
    ```
- **Response:**
    - Success:
      ```json
      {
          "username": "mohamamd",
          "email": "moh@mail.com",
          "token": "<your_generated_token>"
      }
      ```
    - Failure:
      ```json
      {
          "error": "Error message here"
      }
      ```



