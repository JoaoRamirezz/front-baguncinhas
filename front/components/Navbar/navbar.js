import  InputGroup  from "react-bootstrap/InputGroup";
import  Form  from "react-bootstrap/Form";


export default function Navbar() {
    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </>
    )
}