### Strength Space - Gym Application

A responsive stack web application for fitness enthusiasts.
Features include a BMI calculator to track health and a contact form with automated email responses (Nodemailer) for inquiries.

### Quick Glance



### Features

BMI Calculator: Users can calculate and classify their BMI in real time.

Automated Emails: Integrated Nodemailer for handling contact form submissions with email responses.

Responsive UI: Optimized for mobile, tablet, and desktop screens.

Secure Backend: Built with Express.js, secured with Helmet and environment variables.

Deployment: Frontend hosted on Netlify, backend on Vercel.

### Tech Stack

Frontend: React.js, React Router, Axios, CSS (Flexbox/Grid)
Backend: Node.js, Express.js, Nodemailer
Security & Utilities: Helmet.js, dotenv, express-rate-limit
Deployment: Vercel (client), Render/Heroku (server)


### Installation and Setup

1. Clone repo
    - git clone 
    - cd StrengthSpace

2. Backend setup
    - cd backend
    - npm install

    <h4> create env file in backend inside /backend folder </h4> 
    
    <p> 
    PORT=5000 <br/>
    EMAIL_USER=your-email@gmail.com <br/>
    EMAIL_PASS=your-app-password <br />
    </p>
    

    - npm run dev


3. Frontend setup

    - cd ../frontend
    - npm install 
    - npm run dev

