import React from "react";
import "../../styles/global.css";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function NewsGrid({ newsList }) {
  return (
    <Container className="mb-4">
      <Row>
        {newsList?.map((article) => (
          <Col className="mb-4" xs={12} md={6} lg={4} key={article.url}>
            <Card className="">
              <Card.Img
                width={250}
                height={250}
                src={article.image}
                variant="top"
              />
              <Card.Body>
                <Card.Title className="h1">{article.name}</Card.Title>
                <Card.Text className="text-truncate">{article.text}</Card.Text>
                <a
                  className="stretched-link"
                  href={`/news/details/${article._id}`}
                >
                  Leia Mais
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
