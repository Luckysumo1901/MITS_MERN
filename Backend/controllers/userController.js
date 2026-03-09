exports.getUsers = (req,res)=>{
    res.send("Get All Users");
}

exports.getUserById = (req,res)=>{
    res.send("Get User By Id");
}

exports.createUser = (req,res)=>{
    res.json({
        message: "User created successfully"
    });
}

exports.updateUser = (req,res)=>{
    res.json({
        message: "User updated successfully"
    });
}

exports.deleteUser = (req,res)=>{
    res.json({
        message: "User deleted successfully"
    });
}