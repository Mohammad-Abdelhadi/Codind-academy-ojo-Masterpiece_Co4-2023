# Barber App Application Idea

# API Documentation

This documentation provides details on the endpoints for the barber app API.

## Screenshots Mobile Application

### Splash Screen
![Splash Screen](https://github.com/Mohammad-Abdelhadi/Masterpiece_Co4-2023/assets/125509690/3984fd45-b594-4a8b-8ebc-6bf81adc8d1e)
### Introduction One
![Introduction One](https://github.com/Mohammad-Abdelhadi/Masterpiece_Co4-2023/assets/125509690/422755f6-b887-4c85-a567-ce65ff71d586)
### Introduction two
![Introduction two](https://github.com/Mohammad-Abdelhadi/Masterpiece_Co4-2023/assets/125509690/943eb7a0-c3a7-48e2-b186-b144600d0e27)
### sign up
![sign up](https://github.com/Mohammad-Abdelhadi/Masterpiece_Co4-2023/assets/125509690/a2e0e65e-2ed6-41d7-be0b-eb94932a3390)
### log in
![log in](https://github.com/Mohammad-Abdelhadi/Masterpiece_Co4-2023/assets/125509690/2930b7ae-91bf-4e21-abd3-3d6b79a0a59d)
### Home
![Home](https://github.com/Mohammad-Abdelhadi/Masterpiece_Co4-2023/assets/125509690/d870a1e4-5cef-48ef-8bb3-6c4434c0b073)
### Booking Appointment Services   Barber
![Booking Appointment Services   Barber](https://github.com/Mohammad-Abdelhadi/Masterpiece_Co4-2023/assets/125509690/42fd84ca-41f8-4554-a761-5e8c95e5b0a0)
### appointment time
![appointment time](https://github.com/Mohammad-Abdelhadi/Masterpiece_Co4-2023/assets/125509690/8b89b424-3d38-4a93-a79f-505ed4dc9ded)
### Successfuly Booking
![Successfuly Booking](https://github.com/Mohammad-Abdelhadi/Masterpiece_Co4-2023/assets/125509690/92001900-b35a-40c9-bca8-7dc3a9e933f1)
### My appointments
![My appointments](https://github.com/Mohammad-Abdelhadi/Masterpiece_Co4-2023/assets/125509690/2478dd47-f75a-4b88-bb85-b4ecca3a0f0a)
### Live Appointments
![Live Appointments](https://github.com/Mohammad-Abdelhadi/Masterpiece_Co4-2023/assets/125509690/e9f25012-f720-4be6-97d7-35b9f2eb2c8d)


## Screenshots Admin Dashboard
![DashBoard Login](https://github.com/Mohammad-Abdelhadi/Masterpiece_Co4-2023/assets/125509690/099771d6-426e-4529-a6d3-e8b524008249)
![Dashboard All Users](https://github.com/Mohammad-Abdelhadi/Masterpiece_Co4-2023/assets/125509690/568ffde6-b5a6-4375-bfca-160c2e4b9651)
![DashBoard - Pending Appointments](https://github.com/Mohammad-Abdelhadi/Masterpiece_Co4-2023/assets/125509690/72246071-b77f-4634-8d86-f5b6cf4491ce)
![Dashboard - Live Appointments](https://github.com/Mohammad-Abdelhadi/Masterpiece_Co4-2023/assets/125509690/83b32843-938f-4d3c-88c9-1277f347eb37)
![DashBoard - All Appointments](https://github.com/Mohammad-Abdelhadi/Masterpiece_Co4-2023/assets/125509690/6e1fa5e8-93cd-4dc0-9fbb-67a50a107601)

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
