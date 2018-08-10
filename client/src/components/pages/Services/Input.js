import React from "react";

const Input = (props) => {
    return (
        <div>
            <div className="form=group top-row">
                <label htmlFor="keyword">Search</label>
                <input
                    type="text"
                    value={props.keyword}
                    className="form-control"
                    id="keyword"
                    placeholder="keyword"
                    onChange={props.handleChange}
                    required
                />
                <hr />
            </div>
<<<<<<< HEAD
            <div className="form=group">
                <label htmlFor="location">City</label>
                <input 
                    type="text"
                    value={props.location}
                    className="form-control"
                    id="location"
                    placeholder="city"
                    onChange={props.handleChange}
                    required
                /> 
            </div>
            <div className="form-group">
                <label htmlFor="USstate">State</label>
                <select id="USstate" name="USstate" onChange={props.handleChange} required>
                    <option value="AL">AL</option>
                    <option value="AK">AK</option>
                    <option value="AZ">AZ</option>
                    <option value="AR">AR</option>
                    <option value="CA">CA</option>
                    <option value="CO">CO</option>
                    <option value="CT">CT</option>
                    <option value="DE">DE</option>
                    <option value="DC">DC</option>
                    <option value="FL">FL</option>
                    <option value="GA">GA</option>
                    <option value="HI">HI</option>
                    <option value="ID">ID</option>
                    <option value="IL">IL</option>
                    <option value="IN">IN</option>
                    <option value="IA">IA</option>
                    <option value="KS">KS</option>
                    <option value="KY">KY</option>
                    <option value="LA">LA</option>
                    <option value="ME">ME</option>
                    <option value="MD">MD</option>
                    <option value="MA">MA</option>
                    <option value="MI">MI</option>
                    <option value="MN">MN</option>
                    <option value="MS">MS</option>
                    <option value="MO">MO</option>
                    <option value="MT">MT</option>
                    <option value="NE">NE</option>
                    <option value="NV">NV</option>
                    <option value="NH">NH</option>
                    <option value="NJ">NJ</option>
                    <option value="NM">NM</option>
                    <option value="NY">NY</option>
                    <option value="NC">NC</option>
                    <option value="ND">ND</option>
                    <option value="OH">OH</option>
                    <option value="OK">OK</option>
                    <option value="OR">OR</option>
                    <option value="PA">PA</option>
                    <option value="RI">RI</option>
                    <option value="SC">SC</option>
                    <option value="SD">SD</option>
                    <option value="TN">TN</option>
                    <option value="TX">TX</option>
                    <option value="UT">UT</option>
                    <option value="VT">VT</option>
                    <option value="VA">VA</option>
                    <option value="WA">WA</option>
                    <option value="WV">WV</option>
                    <option value="WI">WI</option>
                    <option value="WY">WY</option>
                </select>
=======
            <div className="bottom-row">
                <div className="form=group bottom-item">
                    <label htmlFor="location">City</label>
                    <input
                        type="text"
                        value={props.location}
                        className="form-control"
                        id="location"
                        placeholder="city"
                        onChange={props.handleChange}
                        required
                    />
                    <hr />
                </div>
                <div className="form-group bottom-item">
                    <label htmlFor="USstate">State</label>
                    <select id="USstate" name="USstate" onChange={props.handleChange}>
                        <option value="AL">AL</option>
                        <option value="AK">AK</option>
                        <option value="AZ">AZ</option>
                        <option value="AR">AR</option>
                        <option value="CA">CA</option>
                        <option value="CO">CO</option>
                        <option value="CT">CT</option>
                        <option value="DE">DE</option>
                        <option value="DC">DC</option>
                        <option value="FL">FL</option>
                        <option value="GA">GA</option>
                        <option value="HI">HI</option>
                        <option value="ID">ID</option>
                        <option value="IL">IL</option>
                        <option value="IN">IN</option>
                        <option value="IA">IA</option>
                        <option value="KS">KS</option>
                        <option value="KY">KY</option>
                        <option value="LA">LA</option>
                        <option value="ME">ME</option>
                        <option value="MD">MD</option>
                        <option value="MA">MA</option>
                        <option value="MI">MI</option>
                        <option value="MN">MN</option>
                        <option value="MS">MS</option>
                        <option value="MO">MO</option>
                        <option value="MT">MT</option>
                        <option value="NE">NE</option>
                        <option value="NV">NV</option>
                        <option value="NH">NH</option>
                        <option value="NJ">NJ</option>
                        <option value="NM">NM</option>
                        <option value="NY">NY</option>
                        <option value="NC">NC</option>
                        <option value="ND">ND</option>
                        <option value="OH">OH</option>
                        <option value="OK">OK</option>
                        <option value="OR">OR</option>
                        <option value="PA">PA</option>
                        <option value="RI">RI</option>
                        <option value="SC">SC</option>
                        <option value="SD">SD</option>
                        <option value="TN">TN</option>
                        <option value="TX">TX</option>
                        <option value="UT">UT</option>
                        <option value="VT">VT</option>
                        <option value="VA">VA</option>
                        <option value="WA">WA</option>
                        <option value="WV">WV</option>
                        <option value="WI">WI</option>
                        <option value="WY">WY</option>
                    </select>
                </div>
>>>>>>> c3e04f8246e8a230bb2c50bf745d624901c1fd3c
            </div>
            <div className="form-group">
                <label htmlFor="specialty">Type of service/specialty</label>
                <select id="specialty" name="specialty" onChange={props.handleChange} required>
                    <option value="professional-counselor">Professional counselor</option>
                    <option value="addiction-psychiatrist">Addiction</option>
                    <option value="psychiatrist">Professional psychiatrist</option>
                    <option value="mental-health-nurse-practitioner">Mental health practitioner</option>
                    <option value="group-psychotherapy-psychologist">Group psychologist</option>
                    <option value="school-counselor">School counselor</option>
                    <option value="clinical-psychologist">Clinical psychologist</option>
                    <option value="mental-health-counselor">Mental health counselor</option>
                    <option value="art-therapist">Art therapy</option>
                    <option value="psychiatry-neurology-addiction-medicine">Neurology medicine</option>
                    <option value="rehabilitation-counselor">Rehabilitation counselor</option>
                    <option value="rehabilitation-psychologist">Rehabilitation psychologist</option>
                </select>
            </div>
        </div>
    )
}

export default Input;