

import React from 'react';

export const CoverLetter = () => {
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
            <h2 style={styles.heading}>Career Goal</h2>
            <h3>Dear Hiring Manager</h3>
            <p>
                I am writing to express my interest in the position at your company. As a recent graduate with an Advanced Diploma in Computer Science from George Brown College, I am excited about the opportunity to apply my skills and knowledge to contribute to your team.
            </p>

            <p>With over 3 years of experience in web and database application development, I have gained proficiency in a variety of programming languages and frameworks such as Java, C#, PHP, JavaScript, Spring Boot, .NET, and more. I have also applied design principles such as OOP, MVC, and SOLID to build efficient and reusable code for over 30 websites. Additionally, I have experience in using Agile methodologies to manage control flow and organize tasks for over 60 projects.</p>

            <p>
                I have worked on several college projects, including an online tutoring web and mobile application, an online food finder application, a CRUD application software employee management system, and a system of sports administration and technical support. These projects have given me hands-on experience in developing and implementing complex systems using various technologies such as NodeJS, React, .NET, JavaFX, and PHP.
            </p>

            <p>As a fluent speaker in Turkish and English, I have excellent communication skills, which allow me to effectively collaborate with team members and clients to understand their requirements and deliver high-quality solutions. I am also a quick learner and am always willing to expand my skill set to stay up-to-date with the latest technologies and best practices in the field.</p>
        <p>I am confident that my skills and experience make me a strong candidate for this position. Thank you for considering my application. I look forward to discussing this opportunity with you further.</p>
            <p>Sincerely,</p>
            <p>Onur Korkmaz</p>
        </div>
    );
};


