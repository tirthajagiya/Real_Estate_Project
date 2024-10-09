import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ExploreOneProperty() {
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const apiUrl = "http://localhost:3000/exploreproperty/" + id;
    useEffect(() => {
        fetch(apiUrl, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, [])
    return (
        <>
            <Link className="btn btn-info" to={'/exploreproperty'}>Back</Link>
            <button className="btn btn-danger" onClick={() => {
                fetch(apiUrl, { method: "DELETE" })
                    .then(res => res.json())
                    .then(res => navigate('/exploreproperty'));
            }}>Delete</button>
            <Link className="btn btn-primary" to={'/exploreproperty/edit/'+data.id}>Edit</Link>
            <div className="table">
                <div className="row">
                    <div className="col">
                        User Id : {data.id}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={data.image} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Address:{data.address}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Pincode:{data.pincode}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Property Type: {data.property_type}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Area Type: {data.area_type}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Purpose: {data.purpose}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Owner Name: {data.name}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Owner Contact Number: {data.contact_number}
                    </div>
                </div>
            </div>
        </>
    );
}