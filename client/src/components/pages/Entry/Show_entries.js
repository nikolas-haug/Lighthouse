import React from 'react'
import {
    Component
} from 'react';

class ShowEntries extends Component {
    constructor(props) {
        super(props);
    this.handleAction = (e)=>{
        e.preventDefault()
        let entry_id = e.target.getAttribute('data-id')
        let action = e.target.getAttribute('action')
        action==='edit'? console.log("edit"):console.log("delete")
        }        
    }

    componentDidMount() {
        this.props.getAllEntries()
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.entries.map(entry=>
                        <li key={entry._id}>{entry.title} 
                            <button data-id={entry._id} action="edit"
                                onClick={this.handleAction}>Edit</button> 
                            <button data-id={entry._id} action="delete"
                                onClick={this.handleAction}>Delete</button>
                        </li>
                    )}
                </ul>
            </div>
        )

    }
}
export default ShowEntries;