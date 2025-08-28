### Strength Space - Gym Application

A responsive stack web application for fitness enthusiasts.
Features include a BMI calculator to track health and a contact form with automated email responses (Nodemailer) for inquiries.

### Quick Glance

Demo link - https://drive.google.com/file/d/1aEavi3ws9BNF8O3dW2hJSulu-xsbgzoE/view?usp=sharing
<img width="1818" height="904" alt="image" src="https://github.com/user-attachments/assets/5a0b952d-1654-4f31-890a-cf3902309275" />
<img width="1554" height="923" alt="image" src="https://github.com/user-attachments/assets/25957536-480e-4218-a4be-40f0464caa84" />
<img width="1759" height="603" alt="image" src="https://github.com/user-attachments/assets/a5bddae3-f1dc-4472-a170-36a97a1ec511" />
<img width="1818" height="789" alt="image" src="https://github.com/user-attachments/assets/bfad836d-1bfd-499a-b527-12ee0d81ab88" />
<img width="1822" height="698" alt="image" src="https://github.com/user-attachments/assets/7ae6af01-10c2-4018-961a-0f08df8a904b" />


### Features

BMI Calculator: Users can calculate and classify their BMI in real time.

Automated Emails: Integrated Nodemailer for handling contact form submissions with email responses.

Responsive UI: Optimized for mobile, tablet, and desktop screens.

Secure Backend: Built with Express.js, secured with Helmet and environment variables.

Deployment: Frontend hosted on Vercel, backend on Vercel.

### Tech Stack

Frontend: React.js, React Router, Axios, CSS (Flexbox/Grid)
Backend: Node.js, Express.js, Nodemailer
Security & Utilities:  dotenv, express-rate-limit
Deployment: Vercel


### Installation and Setup

1. Clone repo
    - git clone 
    - cd StrengthSpace

2. Backend setup
    - cd backend
    - npm install

    // create env file in backend inside /backend folder

    PORT=5000 <br />
    EMAIL_USER=your-email@gmail.com <br />
    EMAIL_PASS=your-app-password <br />

    - npm run dev


3. Frontend setup

    - cd ../frontend
    - npm install 
    - npm run dev


