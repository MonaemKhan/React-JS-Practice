import React from 'react';

const ViewEachUser = (props) => {
    const {name, data} = props
    return (
        <div>
            <dl class="row">
                <dt class="col-sm-2">{name}</dt><dt class="col-sm-1">:</dt>
                <dd class="col-sm-9">{data}</dd>
            </dl>
        </div>
    );
};

export default ViewEachUser;