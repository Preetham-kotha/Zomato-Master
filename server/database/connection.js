import moongose from "mongoose";

export default async () => {
    return moongose.connect(process.env.MONGO_URL, {
        
    });
};