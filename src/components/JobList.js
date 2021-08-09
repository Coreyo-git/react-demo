import React from 'react'

function JobList() {
    const jobs = ["Lawson", "Shaw", "New"];
    const items = [];

    for (const job of jobs) {
        items.push(<li>{ job }</li>);
    }

    return (
        <div>
            <ul>{items}</ul>
        </div>
    )
}

export default JobList
