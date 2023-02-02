
import Card from 'react-bootstrap/Card';

function TextExample(props) {
    console.log(props.studentsInfo)

    return (
        <>
            {props.studentsInfo && props.studentsInfo.map(student => (
                <Card>
                    <Card.Header>{student.Name}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-6">

                            <footer className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            )
            )}
        </>
    )
}

export default TextExample;