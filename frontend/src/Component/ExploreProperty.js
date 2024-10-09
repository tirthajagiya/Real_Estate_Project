import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ExploreProperty() {
    const [data, setData] = useState([]);
    const apiUrl = "http://localhost:3000/exploreproperty";
    useEffect(() => {
        fetch(apiUrl, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, [])

    const fomated_property = data.map((pro) => {
        return (
            <div className="col-3">
                <div class="card m-3">
                    <img src={pro.image} width={10} height={300} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{pro.address}</h5>
                        <p class="card-text">{pro.pincode}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Contact Number:{pro.contact_number}</li>
                        <li class="list-group-item">
                            <Link to={'/exploreproperty/'+pro.id}>Read More</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    })
    return (
        <>
            <Link to={'/exploreproperty/addproperty'}>Add Property</Link>
            <div className="container">
                <div className="row">
                    {fomated_property}
                </div>
            </div>
        </>
    );
}