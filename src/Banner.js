import { Container,Row,Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../src/assets/img/header-img.svg";
import { useState, useEffect } from "react";
export const Banner = ()=>{
    const [loopNum,setLoopNum]=useState('');
    const [isDeleting,setIsDeleting]=useState(false);
    const toRotate=["Web Develepor","Web Designer","UI/ UX Designer"]
    const [text,setText]=useState('');
    const period=2000;
    const[delta,setDelta]=useState(300-Math.random()*100);
    useEffect(()=>{
        let ticker=setInterval(()=>{
            ticker();

        },delta)

        return()=>{clearInterval(ticker)};

    },[text])

    const tick = ()=>{
        let i = loopNum % toRotate.length
        let fullText= toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)
        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta=>prevDelta /2)
        }
        if(!isDeleting && updatedText ===fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText ===''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }


    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                 <Col xs={12} md={10} xl={5}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hello, My name is Onur Korkmaz, I have three years of experience as a back-end and front-end developer `}<span className="wrap">{text}</span></h1>
                    <p>
                        I have worked with a variety of programming languages and development frameworks. On the back-end,
                        I have experience with languages such as Java, C#, Node.js, and Python, as well as frameworks such as Spring Boot and Laravel. On the front-end,
                        I have experience with JavaScript, React, React Native, HTML/CSS, and more.
                        In my previous roles, I have developed and maintained various web applications and systems, including CRUD applications, e-commerce websites, and mobile applications. I have also utilized agile methodologies to manage and organize tasks for multiple projects at a time.
                        I am constantly striving to improve my skills and stay up-to-date with the latest industry developments, and I am excited to continue growing as a developer in the future.

                    </p>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Headder Img" />

                /</Col>
                </Row>
            </Container>
        </section>
    )
}