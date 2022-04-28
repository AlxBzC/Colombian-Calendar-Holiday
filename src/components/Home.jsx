import React from 'react'
import Alert from 'react-bootstrap/Alert'

const Home = () => {

    return (
        <>
            <Alert variant="success">
                <Alert.Heading>¡¡¡  Hey, nice to see you!!!</Alert.Heading>
                <p>
                This is a test where an API is consumed and renders the current date and holidays.
                    <ul>
                       * Don't use libraries  * Use Axios  * Use a calendar component  * React-Bootstrap is used for styling
                    </ul>
                </p>
                <hr />
                <p className="mb-0">
                Please select an option!  ~  and Thanks for the oportunity, I hope you like it :)
                </p>
            </Alert>
        </>
    );
}
export default Home