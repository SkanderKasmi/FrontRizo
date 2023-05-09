import { UpdateProfile } from "../update-profile";

export class Article {
    idartcile: number = 0 ;
    title: string = "";
    description : string= "";
    createdAt: Date = new Date;
    updatedat:Date =new Date;
    tagList : string = "";
    slug : string = "";
    count : number = 0 ;
    body : string = "";
    user : UpdateProfile = new UpdateProfile;
}
