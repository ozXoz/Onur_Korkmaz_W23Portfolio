import React from "react";
import './WorkExperience.css'

export const WorkExperience = ()=>{

    const styles = {
        container: {
            padding: '150px',
            fontSize: '19px',
            lineHeight: '1.5',
            textAlign: 'center',

        },
        heading: {
            fontSize: '36px',
            marginBottom: '30px',
        },
    };
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Work Experience</h2>
            <p>As a freelance developer, I have worked on a variety of projects using different programming languages and frameworks. Some of the technologies that I have experience with include:</p>

            <p>PHP: I have developed multiple web applications using PHP, including an e-commerce website that included features such as product listings, shopping cart, and checkout process.</p>

            <p>C#: I have built a customer service application using C# and ASP.NET, which included a GraphQL API for customers to submit support requests and customer service representatives to manage and respond to those requests.</p>
            <p>Java: I have developed multiple Java-based applications, including a Spring Boot microservice that allowed users to manage their to-do lists. The microservice was deployed using Docker and Kubernetes.</p>
            <p>Spring Boot MVC: I have worked on multiple projects using the Spring Boot MVC framework, including the customer service application mentioned above. The MVC architecture helped to keep the code organized and maintainable.</p>
            <p>TypeScript: I have developed cross-platform mobile applications using TypeScript and React Native, including an app that allowed users to track their daily water intake and set reminders.</p>
            <p>React: I have developed multiple web applications using React, including a responsive web application that allowed users to create, edit, and view articles and comments.</p>
            <p>Node.js: I have created multiple RESTful APIs using Node.js and Express, including an API that allowed users to interact with a database of products. The API was secured with JSON Web Tokens (JWT) and implemented pagination, filtering, and sorting.</p>
            <p>MongoDB: I have integrated MongoDB with multiple applications, including the Spring Boot microservice mentioned above. I designed the database schema to allow for efficient querying and indexing, which helped to ensure that the application was scalable.</p
            >
            <p>Overall, working with these technologies has allowed me to gain a broad range of experience and to develop a deep understanding of different programming paradigms. I am comfortable working on both frontend and backend development, and I am always eager to explore new technologies and learn new skills</p>

        </div>
    );
}