
// import {OpenAI} from 'openai'
import dotenv from 'dotenv'

import coursemodel from '../model/courseschema.js'
import reportmodel from '../model/reportschema.js'
import pdfdocument from 'pdfkit'

dotenv.config()
// console.log(process.env.OPENAI_KEY)


// let openai
// const openai=new OpenAI({
//     apiKey:process.env.OPENAI_KEY
// })




const createslide=async(coursename,level)=>{
    try{
        
        const prompt= `Provide a detailed summary for a ${coursename} for ${level}".`
        // const reponse=await openai.createCompletion({
        //     model: "text-davinci-003",
        //     prompt,
        //     max_tokens: 500,
        //     temperature: 0.7,
        // })  
        // return reponse.data.choices[0].text.trim()
    }
    catch(err)
    {
        console.log(err)
    }
}

// let airesponse ={
//     title:'',
//     subtitle:'',
//     content:" Java was created in 1995 by James Gosling and his team at   Sun Microsystems. It was designed to be      platform-independent, allowing developers to  write code once and run it anywhere with the Java        Virtual Machine (JVM). Java's syntax is largely         based on C and C++, with a focus on simplicity, object-oriented programming, and security."
// }

const createlesson=async(coursename)=>{
    try{
      let lessons={}

      let airesponse=await createslide(coursename)
      let contentarr= airesponse.content.split('  ')     
      lessons.name=airesponse?.title
      lessons.slides=[{
        title:airesponse?.subtitle,
        content:[
        contentarr.map((str)=>{
            return {subcontent:str}
        })
    ]
      }] 
      return lessons
    }
    catch(err)
    {
        console.log(err)
    }
}


const createcourse=async(req,res)=>{
    try{
      const {name,Batch,trainer,duration,
      } =req.body
      
      let lesson=await createlesson(name)

      const course=new coursemodel({
        name,
        Batch,
        trainer,
        duration,
        lesson
      })

      await course.save()

      res.json(course)

    }
    catch(err)
    {
        console.log(err)
    }
}


const getcourse=async(req,res)=>{
    try{
      const {id} =req.params 
     
      const course=await coursemodel.findById(id)
      if(!course)
      {
        return res.json({error:"Course is not found"})
      }
      res.json(course)

    }
    catch(err)
    {
        console.log(err)
    }
}

const getallcourse=async(req,res)=>{
    try{
      const courses=await coursemodel.find({})

      res.json(courses)
    }
    catch(err)
    {
        console.log(err)
    }
}


const createreport=async(req,res)=>{
   try{
    const {username,email,degree,level,coursetitle,
       lessons,marks,totalmarks,date
    } =req.body
    
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Provide a learning recommendation for a student with this input: ${coursetitle}`,
        max_tokens: 150,
      });
    
   const report=response.data.choices[0].text.trim()
   
   const doc=new pdfdocument()

   const newreport=new reportmodel({
     username,
     email,
     degree,
     level,
     coursetitle,
     lessons,
     marks,
     totalmarks,
     report,
     date
   })
   

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=report.pdf');
   
    doc.pipe(res)

    doc.fontSize(16).text('Training Report',{align:'center'})
    doc.moveDown(2)
    doc.fontSize(12).text(username)
    doc.moveDown(1)
    doc.fontSize(12).text(email)
    doc.moveDown(1)
    doc.fontSize(12).text(degree)
    doc.moveDown(1)
    doc.fontSize(12).text(level)
    doc.moveDown(2)
    doc.fontSize(11).text(`You scored ${totalmarks} overall of 100`)
    doc.moveDown(2)
    doc.fontSize(11).text(report,{align:'left'})
    doc.end()
    
    await newreport.save()

   }
   catch(err)
   {
    console.log(err)
   }
}


const generatepdf=async(req,res)=>{
    try{
   
      
      
    }
    catch(err)
    {
        console.log(err)
    }
}

export {
    createcourse,
    getallcourse,
    getcourse,
    createreport
}
