import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProperty() {
    const { id } = useParams();
    const apiUrl = "http://localhost:3000/exploreproperty/" + id;
    useEffect(() => {
        fetch(apiUrl, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, [])
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const [selectedValue, setSelectedValue] = useState("option1");
    const handleRadioChange = (
        value
    ) => {
        setSelectedValue(value);
    };
    return (
        <>
            <div class="form-group row">
                <label for="text" class="col-4 col-form-label">Name</label>
                <div class="col-8">
                    <input id="text" name="text" value={data.name} type="text" class="form-control" onChange={(e) => {
                        return (
                            setData({ ...data, name: e.target.value })
                        );
                    }} />
                </div>
            </div>
            <div class="form-group row">
                <label for="number" class="col-4 col-form-label">Contact Number</label>
                <div class="col-8">
                    <input id="number" name="number" value={data.contact_number} type="text" class="form-control" onChange={(e) => {
                        return (
                            setData({ ...data, contact_number: e.target.value })
                        );
                    }} />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-4">Purpose</label>
                <div class="col-8">
                    <div class="custom-control custom-radio custom-control-inline">
                        <input name="radio2" checked={
                            selectedValue ===
                            "option1"
                        } id="radio2_0" type="radio" class="custom-control-input" value="buy" onChange={(e) => {
                            return (
                                setData({ ...data, purpose: e.target.value })
                            );
                        }} />
                        <label for="radio2_0" class="custom-control-label">Buy</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input name="radio2" checked={
                            selectedValue ===
                            "option1"
                        } id="radio2_1" type="radio" class="custom-control-input" value="rent" onChange={(e) => {
                            return (
                                setData({ ...data, purpose: e.target.value })
                            );
                        }} />
                        <label for="radio2_1" class="custom-control-label">Rent</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input name="radio2" checked={
                            selectedValue ===
                            "option1"
                        } id="radio2_2" type="radio" class="custom-control-input" value="sell" onChange={(e) => {
                            return (
                                setData({ ...data, purpose: e.target.value })
                            );
                        }} />
                        <label for="radio2_2" class="custom-control-label">Sell</label>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label for="text2" class="col-4 col-form-label">Image(Link)</label>
                <div class="col-8">
                    <input id="text2" name="text2" value={data.image} type="text" class="form-control" onChange={(e) => {
                        return (
                            setData({ ...data, image: e.target.value })
                        );
                        console.log(data);
                    }} />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-4">Area Type</label>
                <div class="col-8">
                    <div class="custom-control custom-radio custom-control-inline">
                        <input name="radio" checked={
                            selectedValue ===
                            "option1"
                        } status id="radio_0" type="radio" class="custom-control-input" value="urban" onChange={(e) => {
                            return (
                                setData({ ...data, area_type: e.target.value })
                            );
                        }} />
                        <label for="radio_0" class="custom-control-label">Urban</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input name="radio" id="radio_1" type="radio" checked={
                            selectedValue ==
                            "option1"
                        } class="custom-control-input" value="rural" onChange={(e) => {
                            return (
                                setData({ ...data, area_type: e.target.value })
                            );
                        }} />
                        <label for="radio_1" class="custom-control-label">Rural</label>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label for="number" class="col-4 col-form-label">Pincode</label>
                <div class="col-8">
                    <input id="number" name="number" value={data.pincode} type="text" class="form-control" onChange={(e) => {
                        return (
                            setData({ ...data, pincode: e.target.value })
                        );
                    }} />
                </div>
            </div>
            <div class="form-group row">
                <label for="textarea" class="col-4 col-form-label">Address</label>
                <div class="col-8">
                    <textarea id="textarea" name="textarea" value={data.address} cols="40" rows="5" class="form-control" onChange={(e) => {
                        return (
                            setData({ ...data, address: e.target.value })
                        );
                    }}></textarea>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-4">Property Type</label>
                <div class="col-8">
                    <div class="custom-control custom-radio custom-control-inline">
                        <input name="radio1" checked={
                            selectedValue ===
                            "option1"
                        } id="radio1_0" type="radio" class="custom-control-input" value="flat" onChange={(e) => {
                            return (
                                setData({ ...data, property_type: e.target.value })
                            );
                        }} />
                        <label for="radio1_0" class="custom-control-label">Flat</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input name="radio1" checked={
                            selectedValue ===
                            "option1"
                        } id="radio1_1" type="radio" class="custom-control-input" value="plot" onChange={(e) => {
                            return (
                                setData({ ...data, property_type: e.target.value })
                            );
                        }} />
                        <label for="radio1_1" class="custom-control-label">Plot</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input name="radio1" checked={
                            selectedValue ===
                            "option1"
                        } id="radio1_2" type="radio" class="custom-control-input" value="ternament" onChange={(e) => {
                            return (
                                setData({ ...data, property_type: e.target.value })
                            );
                        }} />
                        <label for="radio1_2" class="custom-control-label">Ternament</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input name="radio1" checked={
                            selectedValue ===
                            "option1"
                        } id="radio1_3" type="radio" class="custom-control-input" value="farm" onChange={(e) => {
                            return (
                                setData({ ...data, property_type: e.target.value })
                            );
                        }} />
                        <label for="radio1_3" class="custom-control-label">Farm</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input name="radio1" checked={
                            selectedValue ===
                            "option1"
                        } id="radio1_4" type="radio" class="custom-control-input" value="farmhouse " onChange={(e) => {
                            return (
                                setData({ ...data, property_type: e.target.value })
                            );
                        }} />
                        <label for="radio1_4" class="custom-control-label">Farm House</label>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <div class="offset-4 col-8">
                    <button name="submit" type="submit" class="btn btn-primary" onClick={() => {
                        const apiUrl = "http://localhost:3000/exploreproperty/edit/" + data.id;
                        fetch(apiUrl,
                            {
                                method: "PATCH",
                                body: JSON.stringify(data),
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }
                        )
                            .then(res => res.json())
                            .then(res => navigate('/exploreproperty/' + data.id));
                    }}>Submit</button>
                </div>
            </div>
        </>
    );
}