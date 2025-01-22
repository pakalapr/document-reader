import { useState, useRef } from "react";

const DragDropFilesNew = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    //console.log(event.dataTransfer.files)
    setFiles(event.dataTransfer.files)
  };

  //send document to db
  const handleUpload = () => {
   
    const formData = new FormData();
    console.log("list");
    for (var file of files) {
      formData.append("file_name",file.name);
  }
     //let app_id=1;
     //gernerate 7 digit rando number for app_id
     console.log("before post");
   // let app_id = Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000;
   // console.log(app_id);

    //current timestamp
    let datenow = new Date();
    let updated_on= datenow.toISOString().replace("T"," ").substring(0, 19);
    console.log(updated_on)
    let case_id_suffix=1;

    for (var filelist of formData.entries()) {
      const charIndex = filelist[1].indexOf(".");
      const file_name=filelist[1].substring(0, charIndex);
      console.log(file_name);
      console.log("filename",file_name);
      const app_id = Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000;
      const updated_on= datenow.toISOString().replace("T"," ").substring(0, 19);
      let case_id="10"+case_id_suffix;
      case_id_suffix++;
      const doc_cat="Mortgage";
      const doc_meta_msg="MortgageStmt";
      const updated_by="Prakash";
      //const updated_on="2025-01-22 09:10:59.897666";
      console.log(file_name)
     fetch(
       "http://localhost:5000/document", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
   
         body: JSON.stringify({ app_id, case_id, doc_cat, file_name, doc_meta_msg, updated_by, updated_on })
       }  
     )
     //app_id++;
    }
   
  };



  
  // send files to the server // learn from my other video
 /* const handleUpload = () => {
   
    const formData = new FormData();
    console.log("list");
    //console.log(files.);
    for (var file of files) {
     // console.log(file); 
      formData.append("description",file.name);
  }
    //formData.append("Files",files);
   // console.log(formData.getAll(files.name))
    const description="testtoday"
    //console.log(formData.forEach());
   // console.log("before for loop");
    //console.log(formData.values);
    
   // for (var pair of formData.entries()) {
     //   console.log(pair[0]+", "+pair[1]); 
    //}
    

    //const body = { description };

   /* var object = {};
    formData.forEach(function(value, key){
        object[key] = value;
    });
    var json = JSON.stringify(object);


    console.log(json);*/
   /* console.log("before post");
    for (var pair of formData.entries()) {
      const description=pair[1];
      const id=1;
      console.log(description)
     fetch(
       "http://localhost:5000/todos2", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         //body: {pair[0]}    
         //body: { description }
        
         body: JSON.stringify({ id,description })
       }  
     )/*.then((response) => {
            console.log("response");
     });*/
   // }
 // };/*

  if (files) return (
    <div className="uploads">
        <ul>
            {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li> )}
        </ul>
        <div className="actions">
            <button onClick={() => setFiles(null)}>Cancel</button>
            <button onClick={handleUpload}>Upload</button>
        </div>
    </div>
  )

  return (
    <>
    <h4>Upload Your Document(s)</h4>
        <div 
            className="dropzone"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
          <h5>Drag and Drop Files to Upload</h5>
         
          <input 
            type="file" 
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            accept="image/png, image/jpeg,doc,docx,application/pdf"
            ref={inputRef}
          />
          <button onClick={() => inputRef.current.click()}>Select Files</button>
        </div>
    </>
  );
};

export default DragDropFilesNew;