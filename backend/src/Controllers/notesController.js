import Note from "../models/Notes.js"


// get 


export async function getAllNotes  (_ , res){

   try {

    const notes = await Note.find().sort({createdAt: -1}); 
    res.status(200).json(notes)
    
   } catch (error) {

    console.error("Error in getAllNotes Controller" , error)

    res.status(500).json({message:"Internal Server Error"})
    
   }
}




export async function getNoteById (req , res) {
   
try {
   
const note = await Note.findById(req.params.id); 

if(!note) return res.status(404).json({message:"note not found"}); 
res.json(note)

} catch (error) {
   console.error("the getNoteById in controller Error" , error)
   res.status(500).json({message:"Internal server error"})
}


}



// post



export async function createNotes(req , res){

   try {
    const{ title , content} = req.body ; 
    const note = new Note({title , content})
    
   const savedNote = await note.save()
res.status(201).json(savedNote)

} catch (error) {
    console.error("Error in createNotes Controller" , error)
    res.status(500).json({message:"Internal Server Error"})

   }
} 


// update



export async function updateNotes (req , res){
 
try {
   const { title , content} = req.body ; 
  const updatedNote= await Note.findByIdAndUpdate(req.params.id , {title, content} , {new : true , });

if(!updatedNote) return res.status(404).json({message:"Note not Found"})

    res.status(200).json(updatedNote)

} catch (error) {
   
   console.error("Error in updateNotes Controller" , error)
   res.status(500).json({message:"Internal server Error"});
}
}





// delete


export async function deleteNotes(req , res){
try {
    
   const deletedNote = await Note.findByIdAndDelete(req.params.id);
   if(!deletedNote) return res.status(404).json({message:"note not found"});
   res.status(200).json({message:"Note deleted successfuly!"});

} catch (error) {
   console.error("the deletedNotes Error In controller" , error);
   res.status(500).json({message:"Internal server error"})
}

}