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
- **cURL Example:**  'http://localhost:5000/api/user/signup' \

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
- **cURL Example:**   'http://localhost:5000/api/user/login' \

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
        "id": 1,
        "name": "Mohammad Abdelhadi"
    }
    ```
- **cURL Example:**   'http://localhost:5000/api/user/addbarber/650b9d8bdabaadebc52dbcb2' \
   
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
                   
                ],
                "time": "16:30",
                "date": "2023-09-17",
                "status": "pending"
            }
        ]
    }
    ```
- **cURL Example:**    'http://localhost:5000/api/user/login' \

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

### Get All Users

- **Endpoint:** `GET /api/user/`
- **Authorization:** None
- **cURL Example:**   'http://localhost:5000/api/user/' \
- **Response:**
    - Success:
      ```json
      {
          "users": [
              {
                  "_id": "650eafbb0a65942e19ba24e6",
                  "email": "admin1@admin.com",
                  "password": "$2b$10$3q5vgMM5Mp0Xx8HJPuUwbOUp/3d7pNIvf07X7jGm6Q7gwotH0m8cm",
                  "role": "admin",
                  "barbers": [],
                  "appointments": [],
                  "__v": 0
              },
              {
                  "_id": "650eb0400a65942e19ba2510",
                  "email": "test@test.com",
                  "password": "$2b$10$4B7I5pYhBmRWlZEJNleiZuhYte2wXSBvz8SuboHbyU/NAtAEHIZfK",
                  "role": "user",
                  "appointments": [],
                  "__v": 0
              }
          ]
      }
      ```
    - Failure:
      ```json
      {
          "error": "Error message here"
      }
      ```

### Get All Appointments

- **Endpoint:** `GET /api/user/getallappoinemnts`
- **Authorization:** None
- **cURL Example:**    'http://localhost:5000/api/user/getallappoinemnts' \
   
- **Response:**
    - Success:
      ```json
      {
            "userId": "650b9d8bdabaadebc52dbcb2",
        "appointments": [] , ...all of users
      }
      ```
    - Failure:
      ```json
      {
          "error": "Error message here"
      }
      ```



### Get Appointments For User

- **Endpoint:** `GET /api/user/getAppointmentsForUser/:userId`
- **Authorization:** None
- **cURL Example:**   'http://localhost:5000/api/user/getAppointmentsForUser/655e6267782c5629e422ec2e' \

- **Response:**
    - Success:
      ```json
      [
          {
              "barber": {
                  "id": 1,
                  "name": "alawi ",
                  "availableTime": []
              },
              "services": [
                  {
                      "id": 1,
                      "name": "Service 1",
                      "price": 20,
                      "time": 30,
                      "_id": "6564502b02f4a61066876e56"
                  },
                  {
                      "id": 2,
                      "name": "Service 2",
                      "price": 30,
                      "time": 45,
                      "_id": "6564502b02f4a61066876e57"
                  }
              ],
              "time": "14:30",
              "date": "2023-09-17",
              "status": "accepted",
              "_id": "6564502b02f4a61066876e55"
          }
      ]
      ```
    - Failure:
      ```json
      {
          "error": "Error message here"
      }
      ```
### Get Barbers

- **Endpoint:** `GET /api/user/getbarbers/:id`
- **Authorization:** None
- **cURL Example:**   'http://localhost:5000/api/user/getbarbers/650b9d8bdabaadebc52dbcb2' 
- **Response:**
    - Success:
      ```json
      [
          {
              "id": 1,
              "name": "Mohammad ",
              "availableTime": [
                  "09:00",
                  "10:00",
                  "11:00",
                  "12:00",
              
              ]
          }
      ]
      ```
    - Failure:
      ```json
      {
          "error": "Error message here"
      }
      ```
### Update User Information

- **Endpoint:** `PATCH /api/user/updateuserinfo/:id`
- **Authorization:** None
- **Request:**
    ```json
    {
        "email": "admin@admin.com",
        "role": "admin"
    }
    ```
- **cURL Example:**
    ```bash
    curl --location --request PATCH 'http://localhost:5000/api/user/updateuserinfo/650b9d8bdabaadebc52dbcb2' \
    --data-raw '{
        "email": "admin@admin.com",
        "role": "admin"
    }'
    ```
- **Response:**
    - Success:
      ```json
      {
          "message": "User updated successfully"
      }
      ```
    - Failure:
      ```json
      {
          "error": "Error message here"
      }
      ```

### Update Appointment Status

- **Endpoint:** `POST /api/user/updateAppointmentStatus/:userId/:appointmentId`
- **Authorization:** None
- **Request:**
    ```json
    {
        "newStatus": "accepted"
    }
    ```
- **cURL Example:**
    ```bash
    curl --location --request POST 'http://localhost:5000/api/user/updateAppointmentStatus/655e6267782c5629e422ec2e/6564502b02f4a61066876e55' \
    --data-raw '{
        "newStatus": "accepted"
    }'
    ```
- **Response:**
    - Success:
      ```json
      {
          "message": "Appointment status updated successfully"
      }
      ```
    - Failure:
      ```json
      {
          "error": "Error message here"
      }
      ```

### Delete User

- **Endpoint:** `POST /api/user/delete/:id`
- **Authorization:** None
- **cURL Example:**
    ```bash
    curl --location --request POST 'http://localhost:5000/api/user/delete/650eb01f0a65942e19ba24fe'
    ```
- **Response:**
    - Success:
      ```json
      {
          "message": "User deleted successfully",
          "deletedUser": {
              "_id": "650eb0450a65942e19ba2513",
              "email": "test132@test.com",
              "password": "$2b$10$n5f0IrWFAkQZAOwbRxLU8OsuoSoIWmv7BlHoOuhNNm3eYal9iE286",
              "role": "user",
              "appointments": [],
              "__v": 0
          }
      }
      ```
    - Failure:
      ```json
      {
          "message": "User not found"
      }
      ```
