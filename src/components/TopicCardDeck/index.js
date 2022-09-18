import {Card, Row, Col} from 'react-bootstrap';


export function TopicCardDeck({data}) {
  
    let numCards = data.length
    return (
    <Row xs={1} md={2} className="g-4">
    {Array.from({ length: numCards }).map((_, idx) => (
      <Col key={idx}>
        <Card>
          <Card.Body>
            <Card.Title>{data[idx].title}</Card.Title>
            <Card.Text>
            {data[idx].info}
            
            {data[idx].link !== undefined ? <a href={data[idx].link}> more..</a> : ''}
            </Card.Text>
          </Card.Body>
        </Card>

      </Col>
    ))}
  </Row>
    );
}