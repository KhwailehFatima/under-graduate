import React, { useEffect, useState } from 'react';
import StudentInfo from '../../studentsInfo/studentsInfo'
// import Card from './Card';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Main(props) {
    const [studentInfo, setStudentInfo] = useState('');


    useEffect(() => {
        setStudentInfo(StudentInfo);
    }, []);

    return (
        <Row xs={1} md={2} className="g-4">
            {studentInfo && studentInfo.map((value, key) => (
                <Col>
                    <Card key={props.key} text='success' border='info' className="eachCard" style={{ width: "18rem" }}>
                        <Card.Body className="post-body">
                            <Card.Title className="creator">{value.Name}</Card.Title>
                            <Card.Text>{value.ProjectName}</Card.Text>
                            <Card.Img src={value.photo} class="card-img-top" alt="..." />
                        </Card.Body>
                    </Card>
                </Col>
            ))}

        </Row>
    );
}

export default Main;