// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//req.query
//req.body
//res.revalidate(urlPath)

import { studentsDb } from "@/helper/students-data";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string
  error?:boolean
  data?: any
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

  if (req.method === 'GET') {
    // Get all students
    try{
      const students = studentsDb.getAll()
      res.status(200).json({ message: "successful",data: students,error:false });
    }catch(err){
      res.status(500).json({ message: "Server error 500",error:true }); 
    }
  }else if(req.method === 'POST'){
    // Get data from json body
    const data = req.body
    if(data){
      try{
        studentsDb.create(data).then(db_res=>{
          if(!db_res.error){
            res.status(201).json({ message: "Student record created",error:false,data:db_res.data });
          }else{
            res.status(500).json({ message: "Server error 500",error:true }); 
          } 
        })
      }catch(err:any){
        res.status(500).json({ message: "Server error 500",error:true,data:err.message }); 
      }
    }
  }else{
    res.status(403).json({ message: "Request method not valid", error:true});
  }
}
