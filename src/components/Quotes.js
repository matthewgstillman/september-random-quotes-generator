import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, Container } from "react-bootstrap";

const Quotes = () => {
  //Set Quotes
  const [quotes, setQuotes] = useState({
    text: "I will prepare and some day my chance will come.",
    author: "Abraham Lincoln",
  });

  //Set Random Quotes

  const [randomQuote, setRandomQuote] = useState({
    text:
      "Sometimes the cards we are dealt are not always fair. However you must keep smiling and moving on.",
    author: "Tom Jackson",
  });

  useEffect(() => {
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      //   console.log(data[0]);
      data.map((item) => {
        if (item["author"] == null || "") {
          setQuotes({
            text: item["text"],
            author: "Anonymous",
          });
        } else {
          setQuotes({
            text: item["text"],
            author: item["author"],
          });
        }
      }, []);
      setQuotes(data);
    }
  }, []);

  const getRandom = () => {
    const rounded = Math.round(Math.random() * 1640);
    const text = quotes[rounded]["text"];
    const author = quotes[rounded]["author"];
    setRandomQuote({ text: text, author: author });
    return rounded;
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            {randomQuote.author !== null ? (
              <div>
                <p>
                  <i className="quoteText">"{randomQuote.text}"</i>
                </p>
                <h3>- {randomQuote.author}</h3>
                <br />
              </div>
            ) : (
              <div>
                <p>
                  <i className="quoteText">"{randomQuote.text}"</i>
                </p>
                <h1>- Anonymous</h1>
                <br />
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <div className="text-center">
        <Button variant="primary" onClick={getRandom} className="randomButton">
          Get Random Quote
        </Button>
      </div>
    </div>
  );
};

export default Quotes;
