## Installation

To get started, open a terminal in this project directory and execute the following command to install the necessary modules:

```bash
npm install
```

Once all dependencies have been installed, you can start the server by running:

```bash
npm start
```

After starting the server, navigate to the default address [http://localhost:3000](http://localhost:3000) in your web browser to see results.


## About the Project

The project is a simple web page designed in the format of a Single Page, developed with React.

This project represents the initial deliverable for a specific client. As part of the development process, adjustments were made to images and texts to maintain the confidentiality of client data. The final version of the project is available at [https://communityinterestconnection.com/](https://communityinterestconnection.com/).

### Key Features

- Vertical scroll-down navigation
- Bilingual (English and Spanish)
- Some animations
- Contact Us form
- Social media links
- Map location via iframe
- Responsive design

**Warning:** The "Contact Us" form utilizes [EmailJS](https://www.emailjs.com/docs/examples/reactjs/). It's necessary to configure the ".env" file with the corresponding credentials.


```bash

//set .env variables
    const email_params = {
        serviceID: process.env.REACT_APP_EMAIL_SERVICE_ID || "",
    templateID: process.env.REACT_APP_EMAIL_TEMPLATE_ID || "",
    publicKey: process.env.REACT_APP_EMAIL_PUBLIC_KEY || "",
        body: {
            sender_name: "",
            sender_phone: "",
            sender_email: "",
            sender_message: ""
        }
    };

const btnEnviarClicked = async (e: React.MouseEvent<HTMLElement>) => {
    ...
    emailjs.send()
    ...
}
```

### Presentation

<video src="https://github.com/jean-dlcr/react_one_page/assets/29675638/cc9b2ad4-acb7-4ac0-8853-20ae21ccf7a0" controls type="video/mp4"></video>

