"use client";
import { Image, Container } from "react-bootstrap";
import { NoDataIcon } from "../components/Icons";

const addtoken = () => {

    return (
        <>
            <div className='all-transactions-page'>
                <Container>
                    <div className="all-transcns">
                        <div className="no-data-icon">
                            <NoDataIcon size={100} />
                        </div>
                        <p>No transactions yet.</p>
                    </div>

                </Container>
            </div>
        </>
    )
}

export default addtoken