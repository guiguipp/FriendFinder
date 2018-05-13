// ===============================================================================
// DATA
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var userArray = [
    {
      userName: "Ahmed",
      userEmail: "ahmed@example.com",
      userId: "ahmed", 
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = userArray;