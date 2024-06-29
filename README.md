# Car Wash Booking System

### Live URL

[Visit the Live URL](https://car-wash-booking-system-sooty.vercel.app/)

## Requirement Analysis

[Requirement Analysis](https://docs.google.com/document/d/13ObpaLLztUbTs27in49073Fti3MiKpOGzUGXmoeynes/edit?usp=sharing)

## Project Overview

This project involves create an online booking system for car wash service. The system will include user management, offerings service, scheduling slots and booking capabilities, ensuring a good experience for both customers. Our goal is to make it super easy for customers to book, manage, and track their car wash appointments. The platform allows customers to easily book, manage, and track their car wash appointments, while administrators can oversee operations and manage services efficiently.

## Features:

- `User Management`: User registration and authentication for both admins and regular users.
- `Service Management`: Admins can create, update, retrieve, and delete car wash services.
- `Slot Management`: Admins can create and manage service slots for booking.
- `Booking System`: Users can view available slots and book services.
- `Availability Check`: Users and admins can check available slots for specific services and dates.

### For User:

1. Users can log in and log out securely.
2. Users can check all services.
3. Users can check only available slots.
4. Users can book the service and available slots.
5. User can get only his/her services information.

### For Admin:

1.  Admins can log in and log out securely.
2.  Admins can create the services only.
3.  Admins can update the services only.
4.  Admins can delete the services only.
5.  Admins can create the slots only.
6.  Admins can get all services and slots information.

## ER Diagram

![ERD](car-wash-booking-system.png 'ERD').

## Technology Stack:

- Language: Typescript
- Back-End: Node.js , Express.js
- Database: MongoDB
- Mongoose as the Object Data Modeling (ODM)
- Authentication: JWT (JSON Web Tokens)
- Deployment: Vercel
- Version Control: Git, GitHub

## Setup and Installation

Follow these steps to set up the application on your local machine

### Prerequisites

- Node.js (v18 or above)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository

```js
  git clone https://github.com/mdtahsinamin/car_wash_booking_system.git
  cd car_wash_booking_system_master
```

2. Install dependencies

```js
 npm install
```

3. Set up environment variables:
   Create a .env file in the root directory and add the following:

```ts
PORT=
NODE_ENV=
MONGODB_URL=
BCRYPT_SALT_ROUNDS=
JWT_SECRET=
JWT_EXPIRE_IN=
```

4. Start the application:

```bash
npm run start:dev
```

## API End-Point

### For User:

    /api/auth/signup (POST)
    /api/auth/login (POST)
    /api/services/:id (GET)
    /api/services (GET)
    /api/slots/availability (GET)
    /api/bookings (POST)
    /api/my-bookings(GET)

### For Admin:

    /api/services (POST)
    /api/services/:id (PUT)
    /api/services/:id (DELETE)
    /api/services/slots (POST)
    /api/bookings(GET)

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, please contact:

- Name: Md. Tahsin Amin
