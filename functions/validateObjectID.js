const ObjectId = require("mongoose").Types.ObjectId;

module.exports = function (objID) {
  // check id ObjectID valid start
  if (!ObjectId.isValid(objID)) {
    const myError = new Error(
      `the id:${objID} not valid please provide a valid id`
    );
    myError.status = 400;
    console.log(myError);
    throw myError;
  }
  // check id ObjectID valid end
};
