import { Request, Response } from "express";
import CreateSourseService from "./CreateSourseService";

export function createCourse(request: Request, response: Response) {
    CreateSourseService.execute({
        name: "NodeJS", 
        duration: 10, 
        educator: "Dani"
    });
    
    return response.send();
}