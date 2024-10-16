// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
  if (req.method === 'GET') { // Get request to get student data
    try{
      const { id } = req.query
      if(typeof id == 'string'){
          let response = await studentsDb.getById(id)!
          if(response){
            res.status(200).json({ message: "Successful",error:false,data: response }); 
          }else{
            throw new Error('Cant find user')
          }
      }
    }catch(err:any){
      res.status(500).json({ message: "Server error 500",error:true,data: err.message }); 
    }
  }else if (req.method === 'PUT') { // Put request to edit student data
    try{

    }catch(err){
      res.status(500).json({ message: "Server error 500",error:true }); 
    }
  }if (req.method === 'DELETE') { // Delete request to delete student data
    const {id} = req.query
    try{
      if(typeof id == 'string'){
        studentsDb.delete(id).then(response=>{
          if(response){
            console.log(response,"::::::: delete res ::::::::")
            res.status(201).json({ message: "Success",error:false,data: response }); 
          }
        }).catch(err=>console.log(err,"::::: delete error ::::"))
      }
    }catch(err){
      res.status(500).json({ message: "Server error 500",error:true }); 
    }
  }else{
    res.status(403).json({ message: "Request method not valid", error:true});
  }
}
