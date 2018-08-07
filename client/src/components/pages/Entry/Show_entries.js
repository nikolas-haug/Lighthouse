import React from 'react'
import {
    Component
} from 'react';

class ShowEntries extends Component {
    componentDidMount() {
        this.props.getAllEntries()
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.entries.map(entry=>
                        <li key={entry._id}>{entry.title}</li>
                    )}
                </ul>
            </div>
        )

    }
}
export default ShowEntries;