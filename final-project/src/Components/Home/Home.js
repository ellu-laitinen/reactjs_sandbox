import React from "react";
import './Home.css'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

const Home = () => {
    return (
        <Container>
            <Col>
                <h1>Home</h1>
                <img className="home-img" src="https://source.unsplash.com/iNOgTXeT3OM" alt="Silhouette of a woman in front of starry night sky." />
                <br />
                <br />
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? </p>
            </Col>
        </Container>
    );
};

export default Home;
