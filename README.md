# Student Information Management System

# INTRODUCTION
This app is a simple Student Information Management System using Next.JS

Users can view, add, edit and delete student records.

## GETTING STARTED
To run this app on your local machine clone this repo, cd into the cloned folder and install all packages with yarn or npm

    git clone this repo
    cd repo
    yarn or npm install

This app used NEXT.JS to write .json file to your file system to store the student records

### Live url
    https://sims-timiambaye.netlify.app

### Authentication
    No Authentication is required to use this app

## ERRORS 
Response codes: HTTP response codes have accordingly
Error types and how it is returned.

    {error: boolean, message: string, data: erro-data} 

## RESOURCES ENDPOINT LIBRARY
### View pages

    /students 
    /students/[id]
    /students/new
    /students/[id]/edit

### API endpoints
    /students GET/ POST
    /students/[id] GET, PUT, DELETE


