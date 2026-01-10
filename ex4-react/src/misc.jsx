class Event {
    constructor(context_code, title, description, location_name, start_at, end_at) {
        this.context_code = context_code;
        this.title = title;
        this.description = description;
        this.location_name = location_name;
        this.start_at = start_at;
        this.end_at = end_at;
    }
}

const jsonArray = ['{"id":"1165511","startdate":"2026-01-21","starttime":"10:15","enddate":"2026-01-21","endtime":"11:45","columns":["Föreläsning","E239","S7012E","Digital kommunikation","","Jaap van de Beek","","","","Luleå","","",""]}',
                  '{"id":"1165512","startdate":"2026-01-21","starttime":"10:15","enddate":"2026-01-21","endtime":"11:45","columns":["Föreläsning","E239","S7012E","Digital kommunikation","","Jaap van de Beek","","","","Luleå","","",""]}',
                  '{"id":"1165513","startdate":"2026-01-27","starttime":"14:45","enddate":"2026-01-27","endtime":"16:15","columns":["Föreläsning","E239","S7012E","Digital kommunikation","","Jaap van de Beek","","","","Luleå","","",""]}'
                  ]
let eventsArray = jsonToObject(jsonArray);

eventsArray = jsonToObject(jsonArray);

function jsonToObject(jsonArray) {
    let objArray = [];
    let jsonString = ''
    for (let i = 0; i < jsonArray.length; i++) {
      jsonString = jsonArray[i];
      let jsonObj = JSON.parse(jsonString);
      const reqEvent = new Event("S7012E", jsonObj.columns[0], jsonObj.columns[7], jsonObj.columns[1], jsonObj.startdate + "T" + jsonObj.starttime + ":00Z", jsonObj.enddate + "T" + jsonObj.endtime + ":00Z");
      objArray.push(reqEvent);
    }
    return objArray;
  }

export default eventsArray;