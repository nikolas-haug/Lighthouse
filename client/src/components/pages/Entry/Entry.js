import React from 'react'
import Textarea from 'react-textarea-autosize';
<<<<<<< HEAD:client/src/components/Journal/Entry.js
=======

>>>>>>> cdb63b9ca3b098d8777b0aa4523e15779b64e60e:client/src/components/pages/Entry/Entry.js
import './entry.css'

const Entry = (props) => {

    return (
        <div>
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" id="entry-name" placeholder="Name this entry" />
                </div>
                <hr />
                <div className="form-group">
                    <Textarea className="form-control" id="entry-body" placeholder='Write about your day...'/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Entry;
