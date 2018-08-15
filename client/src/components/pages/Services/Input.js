import React from "react";
import Select from 'react-select';

const options = [
    { value: "AL", label: "AL" },
    { value: "AK", label: "AK" },
    { value: "AZ", label: "AZ" },
    { value: "AR", label: "AR" },
    { value: "CA", label: "CA" },
    { value: "CO", label: "CO" },
    { value: "CT", label: "CT" },
    { value: "DE", label: "DE" },
    { value: "DC", label: "DC" },
    { value: "FL", label: "FL" },
    { value: "GA", label: "GA" },
    { value: "HI", label: "HI" },
    { value: "ID", label: "ID" },
    { value: "IL", label: "IL" },
    { value: "IN", label: "IN" },
    { value: "IA", label: "IA" },
    { value: "KS", label: "KS" },
    { value: "KY", label: "KY" },
    { value: "LA", label: "LA" },
    { value: "ME", label: "ME" },
    { value: "MD", label: "MD" },
    { value: "MA", label: "MA" },
    { value: "MI", label: "MI" },
    { value: "MN", label: "MN" },
    { value: "MS", label: "MS" },
    { value: "MO", label: "MO" },
    { value: "MT", label: "MT" },
    { value: "NE", label: "NE" },
    { value: "NV", label: "NV" },
    { value: "NH", label: "NH" },
    { value: "NJ", label: "NJ" },
    { value: "NM", label: "NM" },
    { value: "NY", label: "NY" },
    { value: "NC", label: "NC" },
    { value: "ND", label: "ND" },
    { value: "OH", label: "OH" },
    { value: "OK", label: "OK" },
    { value: "OR", label: "OR" },
    { value: "PA", label: "PA" },
    { value: "RI", label: "RI" },
    { value: "SC", label: "SC" },
    { value: "SD", label: "SD" },
    { value: "TN", label: "TN" },
    { value: "TX", label: "TX" },
    { value: "UT", label: "UT" },
    { value: "VT", label: "VT" },
    { value: "VA", label: "VA" },
    { value: "WA", label: "WA" },
    { value: "WV", label: "WV" },
    { value: "WI", label: "WI" },
    { value: "WY", label: "WY" }
];

const specialtyOptions = [
    { value: "professional-counselor", label: "Professional counselor" },
    { value: "addiction-psychiatrist", label: "Addiction" },
    { value: "psychiatrist", label: "Professional psychiatrist" },
    { value: "mental-health-nurse-practitioner", label: "Mental health practitioner" },
    { value: "group-psychotherapy-psychologist", label: "Group psychologist" },
    { value: "school-counselor", label: "School counselor" },
    { value: "clinical-psychologist", label: "Clinical psychologist" },
    { value: "mental-health-counselor", label: "Mental health counselor" },
    { value: "art-therapist", label: "Art therapy" },
    { value: "psychiatry-neurology-addiction-medicine", label: "Neurology medicine" },
    { value: "rehabilitation-counselor", label: "Rehabilitation counselor" },
    { value: "rehabilitation-psychologist", label: "Rehabilitation psychologist" }
]

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
                    onChange={event => props.handleChange(event.target.id, event.target.value)}
                    required
                />
                <hr />
            </div>
            <div className="row bottom-row">
                <div className="form=group bottom-item col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <label htmlFor="location">City</label>
                    <input
                        type="text"
                        value={props.location}
                        className="form-control"
                        id="location"
                        placeholder="city"
                        onChange={event => props.handleChange(event.target.id, event.target.value)}
                        required
                    />
                    <hr />
                </div>
                <div className="form-group bottom-item state-input col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <label htmlFor="USstate">State</label>
                    <Select style={{ width: '100px' }} options={options} id="USstate" name="USstate"
                        onChange={selectedOption => props.handleChange('USstate', selectedOption.value)}> */}
                    </Select>

                </div>
                <div className="form-group bottom-item specialty-input col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <label htmlFor="specialty">Type of service/specialty</label>
                    <Select options={specialtyOptions} id="specialty" name="specialty"
                        onChange={selectedOption => props.handleChange('specialty', selectedOption.value)}>
                    </Select>
                </div>
            </div>
        </div>
    )
}

export default Input;