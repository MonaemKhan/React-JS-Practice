import BarChart from '@/pages/admin/barchart';
import React from 'react';

const AdminChart = () => {
    const data = [
        { label: "A", value: 10 },
        { label: "B", value: 25 },
        { label: "C", value: 15 },
        { label: "D", value: 30 },
        { label: "E", value: 20 },
    ];
    return (
        <div>
            <BarChart data={data} />
        </div>
    );
};

export default AdminChart;