// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { studentsDb } from "@/helper/students-data";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string
  error?:boolean
  data?: any
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'GET') { // Get request to get student data
    try{
      const { id } = req.query
      if(typeof id == 'string'){

        studentsDb.getById(id).then(response=>{
          if(response){
            res.status(200).json({ message: "Successful",error:false,data: response }); 
          }else{
            throw response
          }
        }).catch(err=>{
          console.log(err,":::: error getting user ::::")
          throw err 
        })
      }
    }catch(err){
      res.status(500).json({ message: "Server error 500",error:true,data: err }); 
    }
  }else if (req.method === 'PUT') { // Put request to edit student data
    try{

    }catch(err){
      res.status(500).json({ message: "Server error 500",error:true }); 
    }
  }if (req.method === 'DELETE') { // Delete request to delete student data
    try{

    }catch(err){
      res.status(500).json({ message: "Server error 500",error:true }); 
    }
  }else{
    res.status(403).json({ message: "Request method not valid", error:true});
  }
}
