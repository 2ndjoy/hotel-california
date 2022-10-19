import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Room from './Room';

const Rooms = () => {
    const datas = useLoaderData();
    return (
        <div className='flex justify-evenly gap-3'>
            {
                datas.map(data => <Room
                    key={data.id}
                    data={data}></Room>
                )
            }
        </div>
    );
};

export default Rooms;