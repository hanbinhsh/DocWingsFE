import jQuery from 'jquery';
import $ from 'jquery';
$(function() {
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{ label: "剩余空间", value: 12 },
            { label: "文档", value: 30 },
            { label: "其他", value: 20 } ],
        resize: true,
        colors: ['#87d6c6', '#54cdb4','#1ab394'],
        resize: true,
        formatter: function (y, data) { return y + '%' },
    });
});
