import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import React from 'react';
import ViewEachUser from '@/pages/Component/viewEachUser'

const viewUser = () => {
    const route = useRouter();
    const id = route.query.id;
    console.log(`id is : ${id}`)

    const [user, setUser] = useState({});

    useEffect(() => {
        if (id > 0) {
            fetch("https://jsonplaceholder.typicode.com/users/" + id)
                .then(res => res.json())
                .then(data => setUser(data))
                .catch(er => console.log(er))
        }
    }, [id]); // we can use [id]
    return (
        <>
            <title>View info of {user.name}</title>
            <h1 class="text-center">View Details of "{user.username}"</h1>
            <hr />
            <div class="container">
                <div class="ps-5">
                    <ViewEachUser name="Id" data={user.id} />
                    <ViewEachUser name="Name" data={user.name} />
                    <ViewEachUser name="User Name" data={user.username} />
                    <ViewEachUser name="Email" data={user.email} />
                    {/* address    start               */}
                    <dl class="row">
                        <dt class="col-sm-2">Address</dt><dt class="col-sm-1">:</dt>
                        <dd class="col-sm-9">
                            <ViewEachUser name="Street" data={user.address?.street} />
                            <ViewEachUser name="Suite" data={user.address?.suite} />
                            <ViewEachUser name="City" data={user.address?.city} />
                            <ViewEachUser name="Zip Code" data={user.address?.zipcode} />
                            <dl class="row">
                                <dt class="col-sm-2">Geo</dt><dt class="col-sm-1">:</dt>
                                <dd class="col-sm-9">
                                    <ViewEachUser name="Lantityte" data={user.address?.geo?.lat} />
                                    <ViewEachUser name="Longitute" data={user.address?.geo?.lng} />
                                </dd>
                            </dl>
                        </dd>
                    </dl>
                    {/* address finish */}
                    <ViewEachUser name="Phone" data={user.phone} />
                    <ViewEachUser name="WebSite" data={user.website} />
                    {/* company name start */}
                    <dl class="row">
                        <dt class="col-sm-2">Company</dt><dt class="col-sm-1">:</dt>
                        <dd class="col-sm-9">
                            <ViewEachUser name="Name" data={user.company?.name} />
                            <ViewEachUser name="Catch Phrase" data={user.company?.catchPhrase} />
                            <ViewEachUser name="BS" data={user.company?.bs} />
                        </dd>
                    </dl>
                    {/* company end */}
                </div>
            </div>
        </>
    );
};

export default viewUser;