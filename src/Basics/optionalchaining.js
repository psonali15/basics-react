import React from "react";

const OptionalChaining = () => {
  const users = {
    name : "Nikita",
    details: {
      name : "Nikita Kothare",
      designation: "",
    },
    contact: 838383883833,
    alternatecontact : null,

  }

 // object accessed or function called using this operator is undefined/null
  
 // for object
  const username = users?.details?.contact;
  const contact1 = users?.alternatecontact;
  const contact2 = users?.['alternatecontact'];
  const designation = users?.details?.designation;

  console.log("useraname", username, contact1, contact2, designation);
  // expected output is : undefined

  // for functions
  console.log(users.getAllDetails?.());
// Expected output is: undefined
return(
    <div>
         <span>{users?.details?.name}</span>
        <span>{username}</span>
        <span>{contact1}</span>  
        <span>{designation}</span> 
    </div>
)

}
export default OptionalChaining;