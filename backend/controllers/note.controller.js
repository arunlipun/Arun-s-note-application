import Note from "../models/note_model.js";
export const createNote=async (req,res)=>{
    try{
        const{title,content}=req.body;
        if(!title||!content){
            return res.status(400).json({message:"Title and content are required"})
        }
        const newNote=new Note({title,content});
        await newNote.save();
        res.status(201).json(newNote);

    }catch(error){
        res.status(500).json({message:error.message})

    }
}

export const getNotes=async (req,res)=>{
    try{
        const notes=await Note.find().sort({createdAt:-1})
        res.status(200).json(notes)

    }catch(error){
         res.status(500).json({message:error.message})

    }
}

export const updateNotes=async(req,res)=>{
    try{
        const {title,content}=req.body;
        const updatedNote=await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
        if(!updateNotes){
            return res.status(404).json({message:"Note Not Updated"})
        }
        res.status(200).json(updatedNote)

    }catch(error){
         res.status(500).json({message:error.message})

    }
}

export const deleteNotes=async(req,res)=>{
    try{
        const deleteNotes=await Note.findByIdAndDelete(req.params.id)
        if(!deleteNotes){
            return res.status(404).json({message:"Note not found "})
        }
        res.status(200).json({message:"Note deleted successfully"})

    }catch(error){
         res.status(500).json({message:error.message})

    }
}