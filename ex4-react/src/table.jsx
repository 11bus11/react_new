

function generateTable(array) {
    for (let i = 0; i < array.length; i++) {
        return (
            <tr>
                <th scope="col" class="col-1">#</th>
                <th scope="col">{array[i].title}</th>
                <th scope="col">{array[i].description}</th>
                <th scope="col" class="col-3">comment</th>
                <th scope="col">{array[i].location_name}</th>
                <th scope="col">{array[i].start_at}</th>
                <th scope="col">{array[i].end_at}</th>
            </tr>
        );
    };
};

export default generateTable;