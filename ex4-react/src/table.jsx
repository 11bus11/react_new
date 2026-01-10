import eventsArray from './misc'

function GenerateTable() {
    const Table = () => {
        const array = eventsArray;
        for (let i = 0; i < array.length; i++) {
            return(
            <tr>
                <th scope="col" class="col-1">#</th>
                <th scope="col">{array[i].title}</th>
                <th scope="col">{array[i].description + i}</th>
                <th scope="col" class="col-3">
                    <div class="form-group">
                        <input type="comment" class="form-control" name= "<%=event.context_code + num %>" placeholder="Comment"></input>
                        <button type="button" id="commentBtn" class="btn btn-primary"  >send</button>
                    </div>
                </th>
                <th scope="col">{array[i].location_name}</th>
                <th scope="col">{array[i].start_at}</th>
                <th scope="col">{array[i].end_at}</th>
            </tr>
        );
        
    };
};
return Table;
}


export default GenerateTable;