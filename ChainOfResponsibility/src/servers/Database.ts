import PermissionType from "./PermissionType";

interface DatabaseItem {
    email: string;
    password:string;
    permission:PermissionType
}

const Database : DatabaseItem[]=[{
    email:"ana@gmail.com",
    password: "1234",
    permission: PermissionType.ADMIM
},{
    email:"sara@gmail.com",
    password: "1114",
    permission: PermissionType.USER
},{
    email:"Yan@gmail.com",
    password: "4444",
    permission: PermissionType.USER
}]
export default Database;