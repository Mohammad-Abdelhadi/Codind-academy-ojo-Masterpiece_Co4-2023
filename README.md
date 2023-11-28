# Barber App Application Idea

# API Documentation

This documentation provides details on the endpoints for the barber app API.

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
    curl --location 'http://localhost:5000/api/user/signup' \
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
    curl --location 'http://localhost:5000/api/user/login' \
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

### Add New Barber

- **Endpoint:** `POST api/user/addbarber/:id`
- **Authorization:** None
- **Request:**
    ```json
    {
        "name": "Mohammad Abdelhadi"
    }
    ```
- **cURL Example:**
    ```bash
    curl --location 'http://localhost:5000/api/user/addbarber/650b9d8bdabaadebc52dbcb2' \
    --data-raw '{
        "name": "Mohammad Abdelhadi"
    }'
    ```
- **Response:**
    - Success:
      ```json
      {
          "message": "Barber added successfully",
          "barber": {
              "name": "Mohammad Abdelhadi",
              "availableTime": [
                  "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00",
                  "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
              ]
          }
      }
      ```
    - Failure:
      ```json
      {
          "error": "Error message here"
      }
      ```

### Booking Appointment

- **Endpoint:** `POST /api/user/postAppointment/:id`
- **Authorization:** None
- **Request:**
    ```json
    {
        "appointments": [
            {
                "barber": {
                    "id": 1,
                    "name": "alawi",
                    "availableTime": []
                },
                "services": [
                    {
                        "id": 1,
                        "name": "Service 1",
                        "price": 20,
                        "time": 30
                    },
                    {
                        "id": 2,
                        "name": "Service 2",
                        "price": 30,
                        "time": 45
                    }
                ],
                "time": "16:30",
                "date": "2023-09-17",
                "status": "pending"
            }
        ]
    }
    ```
- **cURL Example:**
    ```bash
    curl --location 'http://localhost:5000/api/user/login' \
    --data-raw '{
        "appointments": [
            {
                "barber": {
                    "id": 1,
                    "name": "alawi",
                    "availableTime": []
                },
                "services": [
                    {
                        "id": 1,
                        "name": "Service 1",
                        "price": 20,
                        "time": 30
                    },
                    {
                        "id": 2,
                        "name": "Service 2",
                        "price": 30,
                        "time": 45
                    }
                ],
                "time": "16:30",
                "date": "2023-09-17",
                "status": "pending"
            }
        ]
    }'
    ```
- **Response:**
    - Success:
      ```json
      {
          "message": "Appointments created successfully",
          "appointments": [
              {
                  "barber": {
                      "id": 1,
                      "name": "alawi",
                      "availableTime": []
                  },
                  "services": [
                      {
                          "id": 1,
                          "name": "Service 1",
                          "price": 20,
                          "time": 30
                      },
                      {
                          "id": 2,
                          "name": "Service 2",
                          "price": 30,
                          "time": 45
                      }
                  ],
                  "time": "16:30",
                  "date": "2023-09-17",
                  "status": "pending"
              }
          ]
      }
      ```
    - Failure:
      ```json
      {
          "error": "Conflict: Appointment with barber alawi at 2023-09-17 16:30 already exists."
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
    curl --location 'http://localhost:5000/api/user/login' \
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
    curl --location 'http://localhost:5000/api/user/login' \
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
    curl --location 'http://localhost:5000/api/user/login' \
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
    curl --location 'http://localhost:5000/api/user/login' \
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
    curl --location 'http://localhost:5000/api/user/login' \
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
    curl --location 'http://localhost:5000/api/user/login' \
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
    curl --location 'http://localhost:5000/api/user/login' \
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
    curl --location 'http://localhost:5000/api/user/login' \
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



