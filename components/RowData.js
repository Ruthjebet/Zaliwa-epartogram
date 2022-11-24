import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Row, Col} from 'react-bootstrap';

function RowData(){
    return (
        <div className='RowData'>
            <h1>fluid</h1>
            <Container>
                <Row>
                    <Col>G</Col>
                    <Col>C</Col>
                </Row>
            </Container>
        </div>
    )
}
export default RowData;