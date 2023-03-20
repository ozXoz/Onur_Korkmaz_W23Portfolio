import React from 'react';

export const CareerGoal = () => {
    const styles = {
        container: {
            padding: '150px',
            fontSize: '24px',
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
            <p>
                I  have proficiency in a wide range of programming languages and
                technologies, which makes you a versatile and adaptable software developer.
                With your skills in Java, Nodejs, C#, .NET, MongoDB, GraphQL, Typescript, React, PHP, and React Native, you can consider a variety of career paths
                and goals within the software development industry.
            </p>

            <p>For instance, you could specialize in web development using React,
                Typescript, and GraphQL, which are currently popular technologies for
                building modern web applications. Alternatively, you could focus
                on back-end development using C#, .NET, and MongoDB to build
                scalable and efficient server-side applications. With your proficiency in both front-end and back-end technologies, you could also consider full-stack development roles that involve
                building end-to-end applications.</p>

            <p>
                Another potential career path is mobile development,
                where you could utilize your React Native skills to build
                cross-platform mobile applications that work on both iOS and
                Android devices. With the increasing demand for mobile applications, this could be
                a promising area to specialize in.
            </p>

            <p>Ultimately, your career goals will depend on your
                interests, strengths, and the opportunities available to you.
                It's important to stay up-to-date with the latest technologies and
                trends in the industry, continue learning and expanding your skills, and seek out opportunities that align with
                your goals. Good luck in your career journey!</p>

        </div>
    );
};


