CREATE DATABASE usaf.db;

CREATE TABLE IF NOT EXISTS public.doc_details_new
(
    app_id int CONSTRAINT firstkey PRIMARY KEY,
    case_id VARCHAR(40) ,
    doc_cat VARCHAR(40) ,
    file_name VARCHAR(40) ,
    doc_meta_msg VARCHAR(40) ,
    updated_by VARCHAR(40) ,
    updated_on timestamp with time zone
)