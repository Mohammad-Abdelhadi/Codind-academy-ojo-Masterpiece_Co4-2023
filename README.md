   <h1>Barber Application API Documentation</h1>

    <h2>Get Appointments For User</h2>

    <h3>Endpoint</h3>
    <code>GET /api/user/getAppointmentsForUser/{userId}</code>

    <h3>Example Request</h3>
    <code>curl --location 'http://localhost:5000/api/user/getAppointmentsForUser/655e6282782c5629e422ec36'</code>

    <h3>Example Response</h3>
    <p>No response body.</p>

    <h2>Get All Barbers</h2>

    <h3>Endpoint</h3>
    <code>GET /api/user/getbarbers/{userId}</code>

    <h3>Example Request</h3>
    <code>curl --location 'http://localhost:5000/api/user/getbarbers/650b9d8bdabaadebc52dbcb2'</code>

    <h3>Example Response</h3>
    <p>No response body.</p>

    <h2>Update Appointment Status</h2>

    <h3>Endpoint</h3>
    <code>PUT /api/user/updateAppointmentStatus/{appointmentId}/{userId}</code>

    <h3>Request Body</h3>
    <code>
        {
            "newStatus": "accepted"
        }
    </code>

    <h3>Example Request</h3>
    <code>
        curl --location --request PUT 'http://localhost:5000/api/user/updateAppointmentStatus/650b9dff3c5a2a4763cb7d2b/650b9e373c5a2a4763cb7d87' \
        --data '{
            "newStatus":"accepted"
        }'
    </code>

    <h3>Example Response</h3>
    <p>No response body.</p>

    <h2>Delete User</h2>

    <h3>Endpoint</h3>
    <code>DELETE /api/user/delete/{userId}</code>

    <h3>Example Request</h3>
    <code>curl --location --request DELETE 'http://localhost:5000/api/user/delete/6564d4644af54004266b76ff'</code>

    <h3>Example Response</h3>
    <p>No response body.</p>
